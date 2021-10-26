const Input = ({value,search}) => {
    return <>
    <input type="text" value={value} onChange={search}/>
    </>
}
export default Input;