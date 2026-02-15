import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";

const feedURL="https://netflixtechblog.com/feed";
const parser = new RSSParser();
let articles = [];
const parse = async url =>{
    const feed = await parser.parseURL(url);
    console.log(feed.title);
    feed.items.forEach(items => {
        articles.push({items})
    })
}
parse(feedURL);

let app = express();
app.use(cors());

app.get('/',(req,res) => {
    res.send(articles);
})

const server = app.listen("4000", () => {
    console.log("App is listening at http://localhost:4000");
})

export default server;