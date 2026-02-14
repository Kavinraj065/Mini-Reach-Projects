const ChangeName = ({ username,setUsername }) =>{

    const handlePropChange = () =>{
        // props.changeName("there")
        setUsername("use")
    }

    return(
        <>
            <button onClick={handlePropChange}>Hide My Name</button>
            <p>{username}, What is you plan today</p>
        </>
    )
}

export default ChangeName;