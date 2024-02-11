import { useEffect, useState } from "react";
import TokenItem from "../components/TokenItem";
import '../styles/token-list.css'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchTokens } from "../API/tokenApi";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { TOKENS_ON_PAGE_COUNT, TOTAL_TOKENS } from "../consts";
import InfoPanel from "../components/InfoPanel";
import { tokenSlice } from "../store/reducers/tokenSlice";



function TokenList(){
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [tokensOnPage, setTokensOnPage] = useState([])
    const {filteredTokens, isLoading, isError, error} = useSelector(state => state.tokenReducer)


    useEffect(()=>{
        dispatch(fetchTokens(TOTAL_TOKENS));
        return () => {
            console.log('setFilteredTokens')
            dispatch(tokenSlice.actions.setFilteredTokens([]))
        }
    }, [dispatch])


    useEffect(()=>{
        setTokensOnPage(filteredTokens.slice((page - 1) * TOKENS_ON_PAGE_COUNT, page * TOKENS_ON_PAGE_COUNT))
    }, [page, filteredTokens])

    useEffect(()=>{
        setPage(1)
    }, [filteredTokens])


    return (
        <div className="token-list">
            <SearchBar/>
            <InfoPanel/>
            {isLoading && <Loader></Loader>}
            {!isError && tokensOnPage.map((token)=>{
                return <TokenItem token={token} key={token.id}/>
            })}
            {isError && error.message}
            {!isLoading && <Pagination pagesNumber={Math.ceil(filteredTokens.length / TOKENS_ON_PAGE_COUNT)} onChangePage={setPage} currentPage={page}/>}
        </div>
    );
}



export default TokenList;