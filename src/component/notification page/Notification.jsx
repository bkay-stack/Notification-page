import React from "react";
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
  return (
    <div className="card-wrap">
      <div className="card-header">
        <h3>
          Notifications <span className="icon-count">3</span>
        </h3>
        <p>Mark all as read</p>
      </div>
      <div className="notify-content">
        {/* Mark Webber */}

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

        {/* Angela Gray section */}

        <div className="notify-cont">
          <div className="mark-img">
            <img src={avatarAngela} alt="" />
          </div>
          <div className="mark-cont">
            <p>
              <span className="bold">Angela Gray</span>followed you
              <div className="dot"></div>
            </p>
            <span className="mins">5 mins</span>
          </div>
        </div>

        {/* Jacob Thompson section */}

        <div className="notify-cont">
          <div className="mark-img">
            <img src={avatarJacob} alt="" />
          </div>
          <div className="mark-cont">
            <p>
              <span className="bold">Jacob Thompson</span> has joined your group{" "}
              <span className="blue">Chess Club</span>{" "}
              <div className="dot"></div>
            </p>
            <span className="mins"> 1 day ago</span>
          </div>
        </div>

        {/* Rizky Hasanuddin section */}

        <div className="notify-cont-1">
          <div className="mark-img">
            <img src={avatarRizky} alt="" />
          </div>
          <div className="mark-cont">
            <p>
              <span className="bold">Rizky Hasanuddin</span>sent you a private
              message
            </p>
            {/* <div className="comment"> */}
            <p className="comment">
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </p>
            {/* </div> */}
            <span className="mins"> 1 day ago</span>
          </div>
        </div>

        {/* Kimberly Smith section*/}

        <div className="notify-cont-1">
          <div className="kim-person-wrap">
            <div className="mark-img">
              <img src={avatarKim} alt="" />
            </div>
            <div className="mark-cont">
              <p>
                <span className="bold">Jacob Thompson</span> commented on your
                picture
              </p>
              <span className="mins"> 1 week ago</span>
            </div>
            <div className="chess">
              <img src={avatarChess} alt="" />
            </div>
          </div>
        </div>

        {/*Nathan Peterson  Section */}

        <div className="notify-cont-1">
          <div className="mark-img">
            <img src={avatarNath} alt="" />
          </div>
          <div className="mark-cont">
            <p>
              <span className="bold">Mark Webber</span> reacted to your recent
              post{" "}
              <span className="faint">
                5 end-game strategies to increase your win rate
              </span>
            </p>
            <span className="mins">2 weeks ago</span>
          </div>
        </div>

        {/* Anna Kim section */}

        <div className="notify-cont-1">
          <div className="mark-img">
            <img src={avatarAnna} alt="" />
          </div>
          <div className="mark-cont">
            <p>
              <span className="bold">Jacob Thompson</span> left the group
              <span className="blue">Chess Club</span>{" "}
            </p>
            <span className="mins"> 2 weeks ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
