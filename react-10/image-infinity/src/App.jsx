import { useState, useEffect } from 'react'
import callGetImageAPI from './api.js'
import logo from './logo.svg'
import './App.css'
import InputSearch from './InputSearch.jsx'
import 'semantic-ui-css/semantic.min.css'
import GridRows from './Card.jsx'
import Pagination from './Pagination.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const DEFAULT_TOPIC = "City"

const App = () => {
    const [valueInput, setValueInput] = useState(DEFAULT_TOPIC);
    const [query, setQuery] = useState(valueInput);

    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeOutId = setTimeout(() => setQuery(valueInput), 500);
        return () => clearTimeout(timeOutId);
      }, [valueInput]);

    const handleChange = (e) => {
        let v = e.target.value.trim();
        setValueInput(
            !v || v === "" ? DEFAULT_TOPIC : v
            // v
        )
    }

    const handleNextPage = (num) => {
        setPage(page + num);
    }

    const handlePrevPage = (num) => {
        setPage(Math.max(1, page - num));
    }

    console.log(valueInput)
    console.log(query)

    return (
        <div className='container pt-5'>
            <InputSearch
                onChange={handleChange}
            />
            
            <GridRows
                searchText={query}
                page={page}
            />
            <Pagination 
                currentPage={page}
                onNextPage= {() => handleNextPage(1)}
                onMultiNextPage= {() => handleNextPage(5)}
                onPrevPage= {() => handlePrevPage(1)}
                onMultiPrevPage= {() => handlePrevPage(5)}
                resetPage={setPage}
            />



        </div>
    )
}

export default App
