import { useState } from "react";
import Button from "./button";
import CheckBox from "./checkbox";
const Numbers = ["one", "two", "three", "four", "five"];
const Main = () => {
    const [data, setData] = useState(Numbers);
    const [checkedData, setChecked] = useState([]);
    const [isChecked, setIsChecked] = useState(false)
    const handleChecked = (event) => {
        let tmpChecked = [...checkedData];
        console.log(event.target.checked);
        if (event.target.checked) {
            setIsChecked(!isChecked);
            console.dir(event.target)
            tmpChecked = [...tmpChecked, event.target];
            tmpChecked.map(check => console.log('check', check.checked))
        }
        else {
            setIsChecked(!isChecked);
            tmpChecked = tmpChecked.filter(value => {
                return event.target.name !== value.name;
            })
        }
        console.log(tmpChecked);
        setChecked([...tmpChecked]);
    }
    const handleDelete = () => {
        setChecked(checkedData.forEach(value => value.checked = !value.checked));
        let tmp = [...data];
        checkedData.map((remove) => {
            tmp = tmp.filter((num) => num !== remove.name);
            return tmp;
        });
        console.log(tmp);
        setChecked([]);
        setData(tmp);
        setIsChecked(false);
    }
    const handleReset = () => {
        setChecked(checkedData.forEach(value => value.checked = !value.checked));
        setIsChecked(false);
        setData(Numbers);
        setChecked([]);
        console.log(checkedData);
    }
    return (
        <div>
            <ul>
                {data.map((number, index) => {
                    return (
                        <li key={index}>
                            <CheckBox handleChecked={handleChecked} number={number} checked={isChecked} /> {number}
                        </li>
                    );
                })}
            </ul>
            <div>
                <Button value='Delete' handleClick={handleDelete} />
                <Button value='Reset' handleClick={handleReset} />
            </div>
        </div>
    );
}

export default Main;