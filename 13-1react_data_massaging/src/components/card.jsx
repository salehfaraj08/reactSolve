const Card = (props) => {
    return (
        <>
            <h4 style={{marginTop:'5px'}}>the Object that are born before 1990 is:</h4>
            {props.bornbefore1990.map((val,index)=><p key={index}>{`name: ${val.name}, birthday: ${val.birthday}
            , favorite meats: ${val.favoriteFoods.meats.map(val=>` ${val}`)}
            , favorite fish: ${val.favoriteFoods.fish.map(val=>` ${val}`)}`}</p>)}
        </>
    );
};

export default Card;
