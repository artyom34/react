import React from "react";
import classes from "./newPost.module.css";

const NewPost = () => {
  let createRef = React.createRef();

  let addPost = () => {
    let text = createRef.current.value;
    alert(text);
  };

  return (
    <div className={classes.newPost}>
      <textarea ref={createRef} placeholder="Write a new post..." />
      <br />
      <button onClick={addPost} type="submit">
        Post
      </button>
    </div>
  );
};

export default NewPost;
