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
      <img
        className="post_image"
        src="https://i.pinimg.com/originals/99/f9/ed/99f9ede31328c8484e9e252d08811535.jpg"
        alt=""
      />
      {/** username : comments */}
      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
