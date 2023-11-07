import React, {useState, useEffect} from 'react'

const BreweryPage = ({ search,sortBy}) => {
    const [breweries, setBreweries] = useState(null);
   
     
     const fetchData = async () => {
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?${sortBy}=${search}&per_page=1`);
        const data = await response.json();
        setBreweries(data[0]);

         
     }; 
     useEffect(() => {
        fetchData();
     }, [search]);
     
     
  return (
   <div style={{marginTop:30}}>
    <h5>Name: {breweries?.name}</h5><br />
    <h5>phone: {breweries?.phone}</h5><br />
    <h5>state: {breweries?.state}</h5><br />
    <h5>city: {breweries?.city}</h5><br />
    <h5>Address: {breweries?.street}</h5><br />
    <h5>Website: {breweries?.website_url}</h5>
    </div>
  )
}

export default BreweryPage