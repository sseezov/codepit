import React from "react";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <div>нет картинки профиля</div>;
  }

  return (
    <div>
      <div className={classes.mainHeader}>
        <img
          className={classes.imgMain}
          src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
          alt="main-pic"
        />
      </div>

      <div className={classes.userSection}>
        <div>{props.profile.fullName}</div>

        <div className={classes.userPicture}>
          <img
            className={classes.userPicturePic}
            src={props.profile.photos.large}
            alt="pic"
          ></img>
        </div>

        <div className={classes.userInfo}>{props.profile.aboutMe}</div>
        <br />
        <div>Ссылка на страницу вконтакте: {props.profile.contacts.vk}</div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
