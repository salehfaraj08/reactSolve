import { useEffect, useState } from "react";
import Input from "./input";
const url = 'https://hn.algolia.com/api/v1/search?query=';
const Main = () => {
    const [data, setData] = useState([]),
        [filteredAlgolia, setFilteredAlgolia] = useState([]),
        [searchQuery, setSearchQuery] = useState("hooks");
    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await (await fetch(`${url}${searchQuery}`)).json();
                setData(data.hits);
                setFilteredAlgolia(data.hits);
                console.log(filteredAlgolia);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [data,filteredAlgolia,searchQuery]);
    const setQuery = (event) => {
        setSearchQuery(event.target.value)
    }
    const findFromAlgolia = () => {
        let tmp = data.filter(algolia => algolia.name.toLowerCase().includes(searchQuery.toLowerCase()));
        console.log(tmp);
        setFilteredAlgolia(tmp);
    }

    return (
        <div className='container'>
            <div>
                <Input value={searchQuery} search={setQuery} />
                <input type="button" value="search" onClick={findFromAlgolia}/>
            </div>
            <ul>
                {filteredAlgolia.map((algolia, index) => {
                    return (
                        <li key={index}>
                            {algolia.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Main;