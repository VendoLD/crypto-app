import '../styles/pagination.css'



function Pagination({pagesNumber, onChangePage, currentPage}) {


    const items = []
    for(let i = 1; i <= pagesNumber; i++){
        items.push(i)
        if(i === 5 && pagesNumber > 6){
            items.push('...')
            items.push(pagesNumber)
            break
        }
    }
    if (pagesNumber > 6){
        if(currentPage >= 5 && !((pagesNumber-currentPage) <= 3)){
            items.splice(1, 2, '...')
            items.splice(2, 1, currentPage-1)
            items.splice(3, 1, currentPage)
            items.splice(4, 0, currentPage+1)
        }else if((pagesNumber-currentPage) <= 3){
            items.splice(1, 3, '...')
            items.splice(2, 1, pagesNumber-4)
            items.splice(-2, 1, pagesNumber-3, pagesNumber-2, pagesNumber-1)
        }
    
    }
    return (
        <div className="paginator">
            <div className='item' onClick={e=>(currentPage-1) < 1 ? '' : onChangePage(currentPage-1)}><i className="fa-solid fa-angle-left"></i></div>
            {items.map((item, index)=>{
                return <div className={item === '...' ? 'inactive-item' : currentPage === item ? 'item active' : 'item '} key={index} onClick={e=>onChangePage(Number(e.target.innerHTML))}>{item}</div>
            })}
            <div className='item' onClick={e=>(currentPage+1) > pagesNumber ? '' : onChangePage(currentPage + 1)}><i className="fa-solid fa-angle-right"></i></div>
        </div>
    );
}

export default Pagination;