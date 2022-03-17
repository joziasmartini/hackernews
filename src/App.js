import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Posts from "./components/Posts";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const apiBase = "https://hacker-news.firebaseio.com/v0/";
    this.fetchAPI(apiBase);
  }

  async fetchAPI(apiBase) {
    await fetch(apiBase + "topstories.json")
      .then((res) => res.json())
      .then((res) => res.slice(0, 20))
      .then((res) => {
        res.forEach((id, index) => {
          this.fetchItem(id, index, apiBase);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async fetchItem(id, index, apiBase) {
    var item = apiBase + "item/" + id + ".json";

    await fetch(item)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ posts: [...this.state.posts, res] });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Header
          title="HackerNews API"
          subtitle="Listing the top posts from the Hacker News"
        />
        <Nav options={["Posts", "About"]} />
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
