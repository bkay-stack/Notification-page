import React from "react";
import "./notification.styles.css";
const Notification = () => {
  return (
    <div className="card-wrap">
      <div className="card-header">
        <div className="noti-wrap">
          <h3>
            Notifications <span>3</span>
          </h3>
        </div>
        <p>Mark all as read</p>
      </div>
    </div>
  );
};

export default Notification;
