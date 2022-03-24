import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage, isAuth: state.auth.isAuth };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
