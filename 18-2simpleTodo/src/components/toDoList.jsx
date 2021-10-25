import { useState } from "react";
import { data } from "./data";
const ToDoList = () => {
    const [list, setList] = useState(data);
    const handleCompleted = (event) => {
        console.log(event.target.nextElementSibling.textContent);
        let recordName = event.target.nextElementSibling.textContent,
            newList = [...list];
        // let find = newList.find(record =>record.name === recordName)
        // find.completed = !find.completed;
        // console.log('new',newList);
        newList.forEach(record => {
            if (recordName === record.name)
                record.completed = !record.completed;
        })
        setList([...newList]);
    }
    return <>
        {
            list.map((record, index) => {
                return !record.completed ? <p key={index}> <span onClick={handleCompleted} style={{ cursor: 'pointer' }}>✖️ </span><span style={{ textDecorationLine: 'none ' }}>{record.name}</span></p>
                    : <p key={index}> <span onClick={handleCompleted} style={{ cursor: 'pointer' }}>✔️ </span><span style={{ textDecorationLine: 'line-through' }}>{record.name}</span> </p>
            })
        }
    </>
}

export default ToDoList;