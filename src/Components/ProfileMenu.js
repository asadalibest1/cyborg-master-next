import React from "react";
import profileImg from "@/assets/images/profile.jpg";
import clip01 from "@/assets/images/clip-01.jpg";
import clip02 from "@/assets/images/clip-02.jpg";
import clip03 from "@/assets/images/clip-03.jpg";
import clip04 from "@/assets/images/clip-04.jpg";

const ProfileMenu = () => {
  return (
    <div className="main-profile">
      <div className="row">
        <div className="col-lg-4">
          <img src={profileImg.src} alt="" style={{ borderRadius: "23px" }} />
        </div>
        <div className="col-lg-4 align-self-center">
          <div className="main-info header-text">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Offline</span>
              <span style={{ cursor: "pointer" }}>
                <i className="fa fa-bookmark" aria-hidden="true"></i>
              </span>
            </div>
            <h4>
              <i
                className="fa fa-check"
                style={{
                  backgroundColor: "#e75e8d",
                  borderRadius: "50%",
                  fontSize: "22px",
                  padding: "4px",
                  paddingLeft: "3px",
                }}
              ></i>
              Alan Smithee
            </h4>
            <p>
              You Haven't Gone Live yet. Go Live By Touching The Button Below.
            </p>
            <div className="main-border-button">
              <a href="#">Start Live Stream</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 align-self-center">
          <ul>
            <li>
              Games Downloaded <span>3</span>
            </li>
            <li>
              Friends Online <span>16</span>
            </li>
            <li>
              Live Streams <span>None</span>
            </li>
            <li>
              Clips <span>29</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="clips">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4>
                    <em>Your Most Popular</em> Clips
                  </h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img
                      src={clip01.src}
                      alt=""
                      style={{ borderRadius: "23px" }}
                    />
                    <a
                      href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  <div className="down-content">
                    <h4>First Clip</h4>
                    <span>
                      <i className="fa fa-eye"></i> 250
                    </span>
                  </div>
                </div>
              </div>
              {/* Repeated items for other clips */}
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img
                      src={clip02.src}
                      alt=""
                      style={{ borderRadius: "23px" }}
                    />
                    <a
                      href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  <div className="down-content">
                    <h4>Second Clip</h4>
                    <span>
                      <i className="fa fa-eye"></i> 183
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img
                      src={clip03.src}
                      alt=""
                      style={{ borderRadius: "23px" }}
                    />
                    <a
                      href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  <div className="down-content">
                    <h4>Third Clip</h4>
                    <span>
                      <i className="fa fa-eye"></i> 141
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img
                      src={clip04.src}
                      alt=""
                      style={{ borderRadius: "23px" }}
                    />
                    <a
                      href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                      target="_blank"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  <div className="down-content">
                    <h4>Fourth Clip</h4>
                    <span>
                      <i className="fa fa-eye"></i> 91
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <a href="#">Load More Clips</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
