import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import { authMe } from "./../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mstp = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
  id: state.auth.id,
});

export default connect(mstp, { authMe })(HeaderContainer);
