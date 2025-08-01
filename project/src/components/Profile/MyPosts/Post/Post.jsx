import React from "react";
import classes from "./post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjh5pXG-r5C6NI-XAFaj0ghxPnOr32H4z1XA&s"></img>
      <span className={classes.message}>{props.message}</span>
      <div>
        <span>Likes: {props.likes}</span>
      </div>
    </div>
  );
};
export default Post;
