import React from "react";
import classes from "./myPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  let PostMessage = props.postData.map((m) => (
    <Post message={m.message} likes={m.likes} />
  ));

  let newPostElement = React.useRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };

  return (
    <div className="myPosts">
      <div className={classes.myPosts}>
        <div className={classes.newPost}>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
          <button onClick={addPost}>add post</button>
          <button>remove</button>
        </div>
        {PostMessage}
      </div>
    </div>
  );
};

export default MyPosts;
