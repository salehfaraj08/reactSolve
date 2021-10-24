const Name = (props) => {
    return (
        <>
            <p>the names of the objects is:</p>
            {props.names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </>
    );
};

export default Name;
