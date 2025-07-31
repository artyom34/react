import React from "react";
import classes from "./profile.module.css";
import ImageContent from "./ImageContent/ImageContent";
import Descriptions from "./Descriptions/Descriptions";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <ImageContent />
      <Descriptions />
      <MyPosts />
    </div>
  );
};

export default Profile;
