import classes from "./App.module.css";
import Nav from "./components/nav/nav.jsx";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import Settings from "./components/settings/settings";
import News from "./components/news/news";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";

const App2 = () => {
  return (
    <BrowserRouter>
      <div className={classes.appWrapper}>
        <HeaderContainer />
        <Nav />
        <div className={classes.main}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App2;
