import React from "react";
import classes from "./profile.module.css";
import ImageContent from "./ImageContent/ImageContent";
import Descriptions from "./Descriptions/Descriptions";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ImageContent />
      <Descriptions />
      <MyPosts postData = {props.postData}/>
    </div>
  );
};

export default Profile;
