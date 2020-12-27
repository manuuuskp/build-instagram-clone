import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar/Avatar";

function Post() {
  return (
    <div>
      <div className="post_header">
        <Avatar className="post_avatar" alt="Manoj prabhu" src="" />
        {/* header -> username */}
        <h3>Username</h3>
      </div>
      {/** post - image */}
      <img
        className="post_image"
        src="https://reactjs.org/logo-og.png"
        alt=""
      />
      {/** username : comments */}
      <h4 className="post_text">
        <strong>Username</strong> : This is my comments
      </h4>
    </div>
  );
}

export default Post;
