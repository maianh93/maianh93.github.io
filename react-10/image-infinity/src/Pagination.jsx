const genPages = (page) => {
    const arr = [];
    let p = page - 2;
    while(arr.length < 5) {
        arr.push(p++);
    }
    let result = arr.filter($ => $ > 0);
    if (result.length < 5) {
        arr.filter($ => $ <= 0).forEach($ => {
            let newE = result.at(-1) + 1;
            result.push(newE);
        });
    }
    return result;
}

const Pagination = (props) => {

    let currentPage = props.currentPage;
    let pages = genPages(currentPage);
    return (
        <div className="container text-center mt-5 pb-5">
            <div className="ui pagination menu">
                <i className="angle double left icon" onClick={props.onMultiPrevPage}></i>
                <i className="angle left icon" onClick={props.onPrevPage}></i>
                {pages.map((page) => {
                    const c = currentPage == page ? "active item current-page" : "active item";
                    return <a className={c} onClick={() => props.resetPage(page)} key={page}>
                        {page}
                    </a>
                })}
                <i className="angle right icon" onClick={props.onNextPage}></i>
                <i className="angle double right icon" onClick={props.onMultiNextPage}></i>
            </div>
        </div>
    )
}

export default Pagination