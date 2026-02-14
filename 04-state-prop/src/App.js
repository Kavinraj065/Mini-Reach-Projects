import { useState } from "react"
import ChangeName from "./ChangeName";

function App() {
  const[username, setUsername] = useState("");

  const handleInput = e=>{
    setUsername(e.target.value)
  }

  return (
    <>
      <h1>04 - State and Props</h1>
      <label htmlFor="username">Enter your name: </label>
      <input 
        id="username" 
        type="text" 
        placeholder="My wonderful name" 
        onChange={handleInput} 
      />
      <p> Hi there, {username}</p>
      <p>{username}, you are doing great </p>
      {/* <ChangeName changeName = {username => setUsername(username)}/> */}
      <ChangeName username = {username} setUsername= {setUsername}/>
    </>
  );
}

export default App;
