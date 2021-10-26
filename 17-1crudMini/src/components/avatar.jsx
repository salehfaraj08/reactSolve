import Input from "./input";

const Avatar = ({ avatars,handleFunction }) => {
    return <>{avatars.length ? (avatars.map((avatar) => {
        return <div key={avatar.id} className='avatar'>
            <p> name: {avatar.name} </p>
            <p> country: {avatar.country} </p>
            <p> age: {parseInt(avatar.age / 1000)} </p>
            <img src={avatar.avatar} alt="my-img"/>
            <Input type='button' value='delete' handleFunction={()=>handleFunction(avatar.id)}/>
        </div>
    })) : (
        <div>loading...</div>)
    }</>
}

export default Avatar;