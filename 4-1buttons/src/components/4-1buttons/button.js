const Button = (props) => {
    return (
        <input
            type="button"
            value={props.value}
            style={{ fontWeight: props.weight , margin:'30px'}}
        />
    );
};
export default Button;