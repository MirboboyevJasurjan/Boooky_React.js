import React from "react";
import ReactDOM from "react-dom";

import "./Profile.css";
import photo from "../../assets/react.svg";
import Calendar from "react-github-contribution-calendar";

const Profile = () => {
  var values = {
    "2023-01-01": 1,
    "2023-01-28": 4,
    "2023-02-28": 4,
    "2023-03-28": 1,
    "2023-04-26": 2,
    "2023-05-23": 1,
    "2023-06-27": 3,
    "2023-06-08": 3,
    "2023-06-28": 2,
    "2023-06-29": 4,
    "2023-06-31": 0,
  };
  var until = "2023-12-31";

  return (
    <div className="profileWrap">
      <div className="profileWrap__part1">
        <div className="aboutProfile">
          <div className="profileUpperTitle">
            <div className="profileInfoText">
              <img className="profileAvatar" src={photo} alt="Profile portrait Boooky" />
              <div className="profileBrief">
                <p className="profileName">Jasur</p>
                <p className="profileNickname"><i class="fa-regular fa-at"></i>MirboboyevJasur</p>
                <br />
                <p className="profileRank">
                  Rank <b>1 012 347</b>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="profileMantra">
            <h5 className="mantraOfProfile">
              I love mysefl so much, all world to me ❤💋
            </h5>
          </div>

          <button className="setProfile">Profilni sozlash</button>
          
          <div className="profileContact">
            <ul className="profileContact__ul">
              <li className="profileContact__li">
                <i class="fa-solid fa-user"> <a href="#">Some Link </a></i>
                  </li>
              <li className="profileContact__li">
                <i>
                  <a href="#">Some Link </a>
                </i>
              </li>
              <li className="profileContact__li">
                <i>
                  <a href="#">Some Link </a>
                </i>
              </li>
              <li className="profileContact__li">
                <i>
                  <a href="#">Some Link </a>
                </i>
              </li>
              <li className="profileContact__li">
                <i>
                  <a href="#">Some Link </a>
                </i>
              </li>
              <li className="profileContact__li">
                <i>
                  <a href="#">Some Link </a>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="profileWrap__part2">
        <div className="profileWrap__part2__innerUpperBox"></div>
        <div className="profileWrap__part2__innerMiddleBox">
          <Calendar values={values} until={until} />
        </div>
        <div className="profileWrap__part2__innerUnderBox"></div>
      </div>
      <div className="profileWrap__part3">
        <div className="profileWrap__part3__innerUpperBox"></div>
        <div className="profileWrap__part3__innerUnderBox"></div>
      </div>
    </div>
  );
};

export default Profile;
