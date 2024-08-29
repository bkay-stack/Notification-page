import { useState } from "react";
import "./notification.styles.css";
import avatarMark from "../../images/avatar-mark-webber.webp";
import avatarAngela from "../../images/avatar-angela-gray.webp";
import avatarJacob from "../../images/avatar-jacob-thompson.webp";
import avatarRizky from "../../images/avatar-rizky-hasanuddin.webp";
import avatarKim from "../../images/avatar-kimberly-smith.webp";
import avatarChess from "../../images/image-chess.webp";
import avatarNath from "../../images/avatar-nathan-peterson.webp";
import avatarAnna from "../../images/avatar-anna-kim.webp";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Mark Webber",
      action: "reacted to your recent post",
      post: "My first tournament today!",
      time: "1 mins",
      read: false,
      avatar: avatarMark,
    },
    {
      id: 2,
      name: "Angela Gray",
      action: "followed you",
      time: "5 mins",
      read: false,
      avatar: avatarAngela,
    },
    {
      id: 3,
      name: "Jacob Thompson",
      action: "has joined your group",
      group: "Chess Club",
      time: "1 day ago",
      read: false,
      avatar: avatarJacob,
    },
    {
      id: 4,
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "1 day ago",
      read: false,
      avatar: avatarRizky,
    },
    {
      id: 5,
      name: "Kimberly Smith",
      action: "commented on your picture",
      time: "1 week ago",
      read: false,
      avatar: avatarKim,
      image: avatarChess,
    },
    {
      id: 6,
      name: "Mark Webber",
      action: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      read: false,
      avatar: avatarNath,
    },
    {
      id: 7,
      name: "Jacob Thompson",
      action: "left the group",
      group: "Chess Club",
      time: "2 weeks ago",
      read: false,
      avatar: avatarAnna,
    },
  ]);

  const [allRead, setAllRead] = useState(false);

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  const toggleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map((notif) => ({
      ...notif,
      read: !allRead,
    }));
    setNotifications(updatedNotifications);
    setAllRead(!allRead);
  };

  return (
    <div className="card-wrap">
      <div className="card-header">
        <h3>
          Notifications <span className="icon-count">{unreadCount}</span>
        </h3>
        <p className="mark-all" onClick={toggleMarkAllAsRead}>
          {allRead ? "Mark all as unread" : "Mark all as read"}
        </p>
      </div>
      <div className="notify-content">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`notify-cont ${notif.read ? "read" : "unread"}`}
          >
            <div className="mark-img">
              <img src={notif.avatar} alt={`${notif.name}`} />
            </div>
            <div className="mark-cont">
              <p>
                <span className="bold">{notif.name}</span> {notif.action}{" "}
                {notif.post && (
                  <span className="faint blue-hover">{notif.post}</span>
                )}
                {notif.group && <span className="blue">{notif.group}</span>}
                {!notif.read && <div className="dot"></div>}
              </p>
              {notif.message && <p className="comment">{notif.message}</p>}
              <span className="mins">{notif.time}</span>
            </div>
            {notif.image && (
              <div className="chess">
                <img src={notif.image} alt="related" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
