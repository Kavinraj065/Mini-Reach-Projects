const Feed = ({title, link, date}) =>{

    let formatted = {day:"numeric", month:"long",year :"numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-GB",formatted)
    return(
        <>
            <a href={link} target="blank" rel="noopener noreffer">
                <h3 className="text-xl"d>{title}</h3>
                <p>{articleDate}</p>
            </a>
        </>
    )
}

export default Feed;