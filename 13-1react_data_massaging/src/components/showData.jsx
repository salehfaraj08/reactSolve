import { useEffect, useState } from "react";
import { data } from "../data";
import Card from "./card";
import Name from "./name";

const ShowData = () => {
    const [allNames, setAllNames] = useState([]);
    const [bornBefore, setbornBefore] = useState([]);

    const allNamesSearch = () => {
        let allNames = data.map((obj) => obj.name);
        console.log(allNames);
        return allNames;
    };

    const bornBeforeSearch = () => {
        let bornBefore = [];
        bornBefore = data.filter((obj) => {
            let birthday = obj.birthday.slice(parseInt(obj.birthday.length - 4));
            return birthday < 1990;
        });

        console.log(bornBefore);
        return bornBefore;


    };
    useEffect(() => {
        setAllNames(allNamesSearch());
        setbornBefore(bornBeforeSearch());
    }, []);

    return (
        <div>
            <Name names={allNames} />
            <Card bornbefore1990={bornBefore} />
        </div>
    );
};

export default ShowData;
