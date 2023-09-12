import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])

    const [list,setList] = useState([]);
    const [visitedFlag,setVisitedFlags] = useState([]);

    const visitedFlags = (flags) =>{   
        console.log(flags) 
        const newFlags = [...visitedFlag,flags];
        setVisitedFlags(newFlags);
        
    }
    const setCountry = (country) =>{
        const newCountry = [...list,country];
        setList(newCountry);
        // console.log(list);

    }

    return (
        <>  
            <h2>Countries: { countries.length}</h2>
            <div>
                <h2>Visited Country:{list.length}</h2>
                <ul>
                    {
                        list.map(country => <li key={country.name.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flags-container">
                {
                    visitedFlag.map((flag,inx)=> <img key={inx} src={flag}></img>)
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country country = {country} key={countries.cca3} list ={setCountry} visitedFlags = {visitedFlags}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;