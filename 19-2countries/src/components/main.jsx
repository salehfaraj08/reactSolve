import { useEffect, useState } from "react";
import Input from "./input";
const url = 'https://restcountries.com/v2/all';
const Main = () => {
    const [data, setData] = useState([]),
        [filteredCountries, setFilteredCountries] = useState([]),
        [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            let countries = await (await fetch(url)).json();
            setData(countries);
            setFilteredCountries(countries);
        };
        fetchData();
    }, []);

    const findCountry = (event) => {
        setSearchQuery(event.target.value)
        let tmp = data.filter(country=>country.name.toLowerCase().includes(searchQuery.toLowerCase()));
        console.log(tmp);
        setFilteredCountries(tmp);
    }
    
    return (
        <div>
            <Input value={searchQuery} searchCountry={findCountry} />
            <ul>
                {filteredCountries.map((country, index) => {
                    return (
                        <li key={index}>
                            {country.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Main;