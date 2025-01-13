import Link from "next/link";
import React from "react";

const WelcomeBoard = () => {
  return (
    <div className="main-banner">
      <div className="row">
        <div className="col-lg-7">
          <div className="header-text">
            <h6>Welcome To Squad Groups</h6>
            <h4>
              <em>Browse</em> Your Popular Games Groups Here
            </h4>
            <div className="main-button">
              <Link href="browse">Browse Now</Link>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn card_btn"
              >
                Add Group
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBoard;
