const Input = ({handleChange}) => {
    return <>
        <input type="text" onChange={(e)=>handleChange(e)} placeholder='enter name to search'/>
    </>
}

export default Input;