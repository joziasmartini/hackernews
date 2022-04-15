import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Posts from "./components/Posts";

function App() {
  const apiBase = "https://hacker-news.firebaseio.com/v0/";
  const [posts, setPosts] = useState([]);

  const fetchItem = useCallback(async (id, apiBase) => {
    var item = apiBase + "item/" + id + ".json";

    await fetch(item)
      .then((res) => res.json())
      .then((res) => {
        setPosts((posts) => [...posts, res]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const fetchAPI = useCallback(
    async (apiBase) => {
      await fetch(apiBase + "topstories.json")
        .then((res) => res.json())
        .then((res) => res.slice(0, 20))
        .then((res) => {
          res.forEach((id) => {
            fetchItem(id, apiBase);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [fetchItem]
  );

  useEffect(() => {
    fetchAPI(apiBase);
    return () => {
      setPosts([]);
    };
  }, [fetchAPI]);

  return (
    <div className="App">
      {console.log(posts)}
      <Header
        title="Hacker News API"
        subtitle="A list with the top posts from the Hacker News"
      />
      <Nav options={["Posts", "About"]} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
