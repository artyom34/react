import React from "react";
import classes from "./myPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

let messages = [
  { id: 1, message: "Hello, how are you?", likes: "100" },
  { id: 2, message: "I'm fine thank's, and you?", likes: "200" },
];
let postsInfo = messages.map((post) => (
  <Post key={post.id} message={post.message} likes={post.likes} />
));

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h3 className={classes.title_posts}>My Posts</h3>
      <NewPost />
      {postsInfo}
    </div>
  );
};

export default MyPosts;
