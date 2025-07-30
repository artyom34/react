import React from 'react';
import classes from './profile.module.css';
const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDBKtopAW8vgifNalNkJV9iYrzKD1q6k6og&s'/>
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div className={classes.item}>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
