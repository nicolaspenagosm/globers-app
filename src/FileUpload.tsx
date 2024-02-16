import React, { useState } from "react";
import { storageAPI } from "./services/firebase-api/storage-api";
import { RootState, useAppDispatch } from "./store";
import { login, signUp } from "./store/auth-slice/auth-actions";
import { useSelector } from "react-redux";

const FileUpload: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      dispatch(
        login(
          {
            email: "teeees@gmail.com",
            password: "jeasdasdasd",
            returnSecureToken: true,
          },

          () => {
            console.log("callback");
          }
        )
      );

      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
    } catch (error) {
      console.error("An error occurred while uploading the file:", error);
    }
  };

  const test = () => {
    // if (typeof EventSource !== "undefined") {
    //   const url =  `https://globers-app-default-rtdb.firebaseio.com/chats/${loggedUser?.id}.json?auth=`+token;
    //   console.log(url);
    //   var source = new EventSource(
    //    url
    //   );
    //   source.onmessage = function (event) {
    //     // document.getElementById("result").innerHTML += event.data + "<br>";
    //   };
    //   source.addEventListener(
    //     "message",
    //     function (e) {
    //       console.log(e.data);
    //     },
    //     false
    //   );
    //   source.addEventListener(
    //     "open",
    //     function (e) {
    //       console.log("Connection was opened.");
    //     },
    //     false
    //   );
    //   source.addEventListener(
    //     "error",
    //     function (e) {
    //       console.log("Error - connection was lost.");
    //     },
    //     false
    //   );
    //   //magic goes here!
    //   source.addEventListener(
    //     "patch",
    //     function (e) {
    //       console.log("Patch UP - " + e.data);
    //       console.log(JSON.parse(e.data));
    //     },
    //     false
    //   );
    //   //And here!
    //   source.addEventListener(
    //     "put",
    //     function (e) {
    //       console.log("Put UP - " + e.data);
    //     },
    //     false
    //   );
    // } else {
    //   console.log("Sorry, your browser does not support server-sent events...");
    // }
  };

  return (
    <>
      <div role="tabls">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div>
        <button onClick={test}>Server Sent Event </button>
      </div>
    </>
  );
};

export default FileUpload;
