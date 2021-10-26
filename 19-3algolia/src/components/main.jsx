import { useEffect, useState } from "react";
import Input from "./input";
const url = 'https://hn.algolia.com/api/v1/search?query=';
const Main = () => {
    const [data, setData] = useState([]),
        [isClicked, setClicked] = useState(false),
        [searchQuery, setSearchQuery] = useState("hooks");
    useEffect(() => {
        const fetchData = async () => {

            try {
                let data = await (await fetch(`${url}${searchQuery}`)).json();
                setData(data.hits);
                console.log(data);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [isClicked]);
    const setQuery = (event) => {
        setSearchQuery(event.target.value)
    }
    const findFromAlgolia = async () => {
        setClicked(!isClicked)
    }

    return (
        <div className='container'>
            <div>
                <Input value={searchQuery} search={setQuery} />
                <input type="button" value="search" onClick={findFromAlgolia} />
            </div>
            <ul>

                {data.length === 0 ? <p>loading...</p> :
                    data.map((algolia, index) => {
                        return (
                            <li key={index}>
                                <a href={algolia.title}>{algolia.title}</a>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export default Main;