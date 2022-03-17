import React from "react";
import styles from "./Posts.module.css";

const Posts = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.info}>
              <p>{post.by}</p>
              <p>{", " + post.score + " points"}</p>
              <p>
                {post.descendants && ", " + post.descendants + " comments"}
                {!post.descendants && ", 0 comments"}
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Posts;
