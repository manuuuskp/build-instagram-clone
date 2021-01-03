import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar/Avatar";

function Post({ username, imageUrl, caption }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avatar" alt="Manoj prabhu" src="" />
        {/* header -> username */}
        <h3>{username}</h3>
      </div>
      {/** post - image */}
      <img className="post_image" src={imageUrl} alt="" />
      {/** username : comments */}
      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
