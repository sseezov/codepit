import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profile-reducer";
import MyPosts from "./myPosts";

// const MyPostsContainer = () => {
//   // let state = props.store.getState();

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             postData={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    onPostChange: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
