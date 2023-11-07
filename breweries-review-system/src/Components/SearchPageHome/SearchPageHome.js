import "./SearchPage.css"
import React, { useState } from 'react'
import BreweryPage from '../BreweryPage/BreweryPage'

const SearchPageHome = () => {
    const [search, setSearch] = useState('');
    const [state,setState]=useState("")
    const [sortBy,setSortBy]=useState("by_name")
    const sortby = ['by_city',' by_name',' by_type'] 
    const handleSearchChange = (e) => {
        setState(e.target.value);
    };
    // console.log(sortBy)
    const onSlectHandle=(e)=>{
        setSortBy(e.target.value)
    }
    const searchHandle=()=>{
        setSearch(state)
    }
  return (
    <div>
        <select value={sortBy} onChange={onSlectHandle} >
            {sortby.map(el=>(
                <option key={el} onClick={()=>console.log(el)}>{el}</option>
            ))}
        </select>
    <input
      type="text"
      placeholder={`Search Breweries ${sortBy}`}
      value={state}
      onChange={handleSearchChange}
    />
    <button onClick={searchHandle}>Search</button>
    <BreweryPage search={search} sortBy={sortBy}/>
  </div>                 
  )
}



export default SearchPageHome