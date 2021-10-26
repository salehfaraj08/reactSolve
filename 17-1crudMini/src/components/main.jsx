import { useEffect, useState } from "react";
import { GetData, DelData, AddData } from "./apiUtilities/request";
import Avatar from "./avatar";
import Input from "./input";

const Main = () => {
    const [data, setData] = useState([]);
    const [newAvatar, setNewAvatar] = useState('');
    useEffect(() => {
        GetData().then(response => {
            console.log(response.data);
            setData(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    const handleDelete = async (id) => {
        console.log(id);
        try {
            let response = await DelData(id);
            if (response.status === 200) {
                const tmpAvatars = [...data];
                let updatAfterDelete = tmpAvatars.filter(avatar => {
                    return avatar.id !== id
                })
                setData(updatAfterDelete);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleChange = (event) => {
        setNewAvatar(event.target.value)
    }

    const handleAddNewAvatar = async () => {
        if (newAvatar.length) {
            let Avatar = {
                name: newAvatar
            }
            try {
                let response = await AddData(Avatar);
                console.log(response);
                if(response.status===201){
                    let avatarData = response.data;
                    let newAvatars = [...data];
                    newAvatars = [...newAvatars,avatarData];
                    setData(newAvatars);
                    setNewAvatar('');
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <>
            <h1>Avatars List</h1>
            <div className='new'>
                <h3>Add a new avatar</h3>
                <Input type='text' value={newAvatar} handleFunction={handleChange} />
            </div>
            <div className='add'>
                <Input type='button' value='Add' handleFunction={handleAddNewAvatar} />
            </div>

            <div className='container'>
                <Avatar avatars={data} handleFunction={handleDelete} />
            </div>
        </>
    );
}

export default Main;