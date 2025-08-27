import React from "react";
import classes from "./myPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {
  

  let postsInfo = props.postData.posts.map((post) => (
    <Post key={post.id} message={post.message} likes={post.likes} />
  ));

  return (
    <div className={classes.posts}>
      <h3 className={classes.title_posts}>My Posts</h3>
      <NewPost />
      {postsInfo}
    </div>
  );
};

export default MyPosts;
