import { useState } from 'react';
import './Country.css'
const Country = ({country,list,visitedFlags}) => {
    console.log(country);
    const {name,flags,population,capital} = country;

    const [visited,setVisited] = useState(false);
    
    // const handleVisited = () =>{
    //     setVisited(!visited)
    // }
    // console.log(visitedFlags);
    return (
        <div className={`container ${visited? 'visited':''}`}>
            <h2>Name:{name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Total Population:{population}</p>
            <p>Capital:{capital}</p>
            <button onClick={() => list(country)}>Show Visited Country</button>
            <br />
            <br />
            <button onClick={() => visitedFlags(country.flags.png)}>Visited Flags</button>
            <br />
            <br />
            <button onClick={() =>setVisited(!visited)}>Visited</button>
            {
                visited? 'I have visited this country':'I want to visit the country'
            }
        </div>
    );
};

export default Country;