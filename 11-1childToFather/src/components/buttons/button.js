import './style.css';
const Button = (props) => {

    return <div>
        <input type='button' style={{background:props.color}} value={props.color} onClick={(event)=>props.callBack(event)}/>
    </div>


}

export default Button;