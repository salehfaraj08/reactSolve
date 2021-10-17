import './card.css'

const Card = ({ imgUrl, title, description }) => {
    return <div className='card'>
        <img src={imgUrl}></img>
        <h2>{title}</h2>
        <p>{description}</p>
        <div><a href='#' className='link'>Share</a> <a href='#' className='link'>Explore</a></div>
    </div>

};

export default Card;