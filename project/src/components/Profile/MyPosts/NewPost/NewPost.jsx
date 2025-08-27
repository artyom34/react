import React from "react";
import classes from "./newPost.module.css";

const NewPost = () => {
  let addRef = React.createRef();

  let addPost = () => {
    let text = addRef.current.value;
    alert(text);
  };

  return (
    <div className={classes.newPost}>
      <textarea ref={addRef} placeholder="Write a new post..." />
      <br />
      <button onClick={addPost} type="submit">
        Post
      </button>
    </div>
  );
};

export default NewPost;
