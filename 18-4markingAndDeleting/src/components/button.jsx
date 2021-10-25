const Button = ({value,handleClick}) =>{
    return <input className='btn' type='button' value={value} onClick={handleClick} />
}

export default Button;