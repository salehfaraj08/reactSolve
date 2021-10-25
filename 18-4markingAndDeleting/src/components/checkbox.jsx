const CheckBox = ({handleChecked,number,checked}) => {
    return <>
        <input readOnly={true} type='checkbox' onClick={handleChecked} name={number} defaultChecked={checked}/>
    </>
}

export default CheckBox;