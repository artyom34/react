import React from "react";
import classes from "./myPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h3 className={classes.title_posts}>My Posts</h3>
      <NewPost />
      <Post message ="Hello, how are you?"/>
      <Post message="I'm fine thank's, and you?" />
    </div>
  );
};

export default MyPosts;
