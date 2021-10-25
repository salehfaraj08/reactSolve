import { useEffect, useState } from "react";
const url = 'https://swapi.dev/api/films/1/';
const Main = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let data = await (await fetch(url)).json();
            setData(data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>{data.title}</h1>
            <h4>{data.director}</h4> 
        </div>
    );
}

export default Main;