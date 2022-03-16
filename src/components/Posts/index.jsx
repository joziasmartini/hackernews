import React from "react";

const Posts = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => {
        return (
          <div className="post-item">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-info">
              <p className="post-author">{post.by}</p>
              <p className="post-points">{", " + post.score + " points"}</p>
              <p className="post-comments">
                {", " + post.descendants + " comments"}
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Posts;
