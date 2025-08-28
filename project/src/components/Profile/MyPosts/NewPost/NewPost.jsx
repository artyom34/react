import React from "react";
import classes from "./newPost.module.css";

const NewPost = (props) => {
  let createRef = React.createRef();

  let addPost = () => {
    let text = createRef.current.value;

    props.addNewPost(text);
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
