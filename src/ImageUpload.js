import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { db, storage } from "./firebase";
import firebase from "firebase";

export default function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const uploadFile = (e) => {
    if (e.target.files[0]) setImage(e.target.files[0]);
  };

  const uploadPost = () => {
    const uploadPostData = storage.ref(`image/${image.name}`).put(image);

    uploadPostData.on(
      "file_upload",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error.message);
        alert(error.message);
      },
      () => {
        storage
          .ref("image")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <>
      <progress value={progress} max="100" />
      <Input
        onChange={(e) => setCaption(e.target.value)}
        placeholder="write something..."
      />
      <input type="file" onChange={uploadFile} />
      <Button onClick={uploadPost}>UPLOAD</Button>
    </>
  );
}
