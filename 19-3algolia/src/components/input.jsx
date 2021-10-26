const Input = ({value,search}) => {
    return <>
    <input className="search" type="text" value={value} onChange={search}/>
    </>
}
export default Input;