import '../styles/search.css'
import { useDispatch, useSelector} from 'react-redux';
import { tokenSlice } from '../store/reducers/tokenSlice';
import { useState } from 'react';
import { memo } from 'react';


function SearchBar() {

    const dispatch = useDispatch()
    const [tokenName, setTokenName] = useState('')
    const {allTokens} = useSelector(state=>state.tokenReducer)

    const handleChanges = (inputValue) => {
        setTokenName(inputValue)
        let filteredTokens = []
        if(inputValue !== ''){
            filteredTokens = allTokens.filter((token)=>{
                return token.name.replaceAll(' ', '').toLowerCase().startsWith(inputValue.replaceAll(' ', '').toLowerCase())
            })
        }else{
            filteredTokens = allTokens
        }
        dispatch(tokenSlice.actions.setFilteredTokens(filteredTokens))
    }

    return (
        <div className="search">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            <input className='search-input' value={tokenName} onChange={e=>handleChanges(e.target.value)}/>
        </div>
    );
}

export default memo(SearchBar);