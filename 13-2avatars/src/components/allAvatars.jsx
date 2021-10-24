const AllAvatars = ({ persons }) => {
    return <div className='container'>
        <div className='persons'>
            {persons.map((person, index) => {
                return <div key={index} className='person'>
                    <p>{person.Name}</p>
                    <img src={person.urlPic} alt="my-img" />
                </div>
            })}
        </div>
    </div>
}

export default AllAvatars;