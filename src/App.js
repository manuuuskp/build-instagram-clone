import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";
import { auth, db } from "./firebase";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

export default function App() {
  const [posts, setposts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setposts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data()
        }))
      );
    });
  }, [user, username]);

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        console.log(authuser);
        setUser(authuser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((reponse) => {
        return reponse.user.updateProfile({
          displayName: username
        });
      })
      .catch((error) => alert(error.message));
  };

  const classes = useStyles();
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </div>
      <Button onClick={() => setOpen(true)}>Sign up</Button>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_modal">
            <center>
              <img
                className="app_headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram"
              />
            </center>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
