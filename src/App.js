import React from "react";
import "./App.css";
import Post from "./Post";

export default function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </div>
      <Post username="manojprabhu" imageUrl="" caption="Hiii ! Goooood day !" />
      <Post
        username="__filerkaapi__"
        imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F165999936242363032%2F&psig=AOvVaw3OTunGgTtPOTUIam9ScQjo&ust=1609213343379000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDzqoDh7-0CFQAAAAAdAAAAABAD"
        caption="Hurray, I won"
      />
      <Post username="valli" imageUrl="" caption="This is my family" />
    </div>
  );
}
