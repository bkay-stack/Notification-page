import React from "react";
import "./notification.styles.css";
import avatarMark from "../../images/avatar-mark-webber.webp";
const Notification = () => {
  return (
    <div className="card-wrap">
      <div className="card-header">
        <h3>
          Notifications <span className="icon-count">3</span>
        </h3>
        <p>Mark all as read</p>
      </div>
      <div className="notify-content">
        <div className="notify-cont">
          <div className="mark-img">
            <img src={avatarMark} alt="" />
          </div>
          <div className="mark-cont">
            <p>
              <span className="bold">Mark Webber</span> reacted to your recent
              post <span className="faint">My first tournament today!</span>
              <div className="dot"></div>
            </p>
            <span className="mins">1 mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
