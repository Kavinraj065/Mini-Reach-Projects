import axios from "axios";
import { useEffect,useState } from "react";
import Feed from "./feed";
function App() {

  const [articles , setArticles] = useState([]);
  console.log(articles);

  const getArticles = async () =>{
    try{
      const res = await axios.get("http://localhost:4000/")

      setArticles(res.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() =>{
    getArticles();
  },[])

  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-4"> 05 - RSS feed</h1>
      <h2 className="text-3xl font-semibold text-center mt-2 mb-4"> Good Morning
      </h2>
      <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
        <div>
          <img src="	https://miro.medium.com/v2/resize:fill:48:48/1*BJWRqfSMf9Da9vsXG9EBRQ.jpeg" alt="User Profile"/>
        </div>
        {articles.map((items,i)=>
          <Feed 
            key={i}
            title = {items.items.title}
            link = {items.items.link}
            date = {items.items.pubDate}
          />
        )}
      </div>
    </>
  );
}

export default App;