const Input = ({value,searchCountry}) => {
    return <>
    <input type="text" value={value} onChange={searchCountry}/>
    </>
}
export default Input;