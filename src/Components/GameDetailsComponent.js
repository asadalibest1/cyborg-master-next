import React from "react";
import featureLeftImg from "@/assets/images/feature-left.jpg";
import featureRightImg from "@/assets/images/feature-right.jpg";
import details01Img from "@/assets/images/details-01.jpg";
import details02Img from "@/assets/images/details-02.jpg";
import details03Img from "@/assets/images/details-03.jpg";

const GameDetailsComponent = () => {
  return (
    <>
      {/* ***** Featured Start ***** */}
      <div className="row">
        <div className="col-lg-12">
          <div className="feature-banner header-text">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src={featureLeftImg.src}
                  alt=""
                  style={{ borderRadius: "23px" }}
                />
              </div>
              <div className="col-lg-8">
                <div className="thumb">
                  <img
                    src={featureRightImg.src}
                    alt=""
                    style={{ borderRadius: "23px" }}
                  />
                  <a
                    href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Featured End ***** */}

      {/* ***** Details Start ***** */}
      <div className="game-details">
        <div className="row">
          <div className="col-lg-12">
            <h2>Fortnite Details</h2>
          </div>
          <div className="col-lg-12">
            <div className="content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left-info">
                    <div className="left">
                      <h4>Fortnite</h4>
                      <span>Sandbox</span>
                    </div>
                    <ul>
                      <li>
                        <i className="fa fa-star"></i> 4.8
                      </li>
                      <li>
                        <i className="fa fa-download"></i> 2.3M
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-info">
                    <ul>
                      <li>
                        <i className="fa fa-star"></i> 4.8
                      </li>
                      <li>
                        <i className="fa fa-download"></i> 2.3M
                      </li>
                      <li>
                        <i className="fa fa-server"></i> 36GB
                      </li>
                      <li>
                        <i className="fa fa-gamepad"></i> Action
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img
                    src={details01Img.src}
                    alt=""
                    style={{ borderRadius: "23px", marginBottom: "30px" }}
                  />
                </div>
                <div className="col-lg-4">
                  <img
                    src={details02Img.src}
                    alt=""
                    style={{ borderRadius: "23px", marginBottom: "30px" }}
                  />
                </div>
                <div className="col-lg-4">
                  <img
                    src={details03Img.src}
                    alt=""
                    style={{ borderRadius: "23px", marginBottom: "30px" }}
                  />
                </div>
                <div className="col-lg-12">
                  <p>
                    Cyborg Gaming is free HTML CSS website template provided by
                    TemplateMo. This is Bootstrap v5.2.0 layout. You can make a{" "}
                    <a
                      href="https://paypal.me/templatemo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      small contribution via PayPal
                    </a>{" "}
                    to info [at] templatemo.com and thank you for supporting. If
                    you want to get the PSD source files, please contact us.
                    Lorem ipsum dolor sit consectetur es dispic dipiscingei
                    elit, sed doers eiusmod lisum hored tempor.
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="main-border-button">
                    <a href="#">Download Fortnite Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Details End ***** */}
    </>
  );
};

export default GameDetailsComponent;
