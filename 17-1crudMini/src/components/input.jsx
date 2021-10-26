const Input = ({ classname, type, value, handleFunction }) => {
    return <>
        {
            type === 'text'?
            <input type={type} value={value} onChange={handleFunction}/>
            :
            <input type={type} value={value} onClick={handleFunction}/>
        }
    </>
}
export default Input;