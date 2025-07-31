import React from "react";
import classes from "./newPost.module.css";

const NewPost = () => {
    return (
       <div className={classes.newPost}>
            <textarea placeholder="Write a new post..." /><br />
            <button type="submit">Post</button>
       </div>
    );
}

export default NewPost;