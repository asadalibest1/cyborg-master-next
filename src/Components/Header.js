"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import profileheader from "@/assets/images/profile-header.jpg";
import Logo from "@/assets/images/logo.png";
import useScreenWidth from "./useScreenWidth";
// Dynamically import the component that includes the form
const HeaderSearch = dynamic(() => import("./HeaderSearch"), {
  ssr: false, // Disable server-side rendering for this component
});
// Import CSS directly if using Next.js' built-in CSS support
// import styles from '../styles/Header.module.css'; // Ensure you have this CSS file in your styles directory

const Header = () => {
  // Define any necessary state or functions here
  const screenWidth = useScreenWidth();

  const [display, setDisplay] = useState(false);
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <Link href="/">
                {/* Next.js Image component for optimized images. Adjust the import path as needed. */}
                <Image
                  id="logo"
                  src={Logo}
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>

              {/* Search */}
              <div className="search-input">
                <HeaderSearch />
              </div>

              {/* Navigation Menu */}
              {screenWidth > 500 ? (
                <ul className="nav" style={{ display: "unset" }}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/browse" className="active">
                      Browse
                    </Link>
                  </li>
                  <li>
                    <Link href="/details">Details</Link>
                  </li>
                  <li>
                    <Link href="/streams">Streams</Link>
                  </li>
                  <li>
                    <a
                      data-dropdown="#noanchor"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div
                        className="dropdown-menu dropdown-anchor-top-left"
                        id="noanchor"
                      >
                        <div
                          className="main-profile"
                          style={{ padding: "17px" }}
                        >
                          <ul style={{ paddingBottom: "8px" }}>
                            <li
                              style={{ padding: "0px" }}
                              className="shadow-none"
                            >
                              <div id="my-signin2"></div>
                            </li>
                            <li>
                              <div
                                id="spinner"
                                style={{
                                  background: "#4267b2",
                                  borderRadius: "5px",
                                  color: "white",
                                  height: "40px",
                                  textAlign: "center",
                                  width: "250px",
                                }}
                              >
                                Loading
                                <div
                                  className="fb-login-button"
                                  data-max-rows="1"
                                  data-size="large"
                                  data-button-type="continue_with"
                                  data-use-continue-as="true"
                                ></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      Profile <img src={profileheader?.src} alt="" />
                    </a>
                  </li>{" "}
                </ul>
              ) : (
                <ul
                  className="nav"
                  style={{ display: display ? "unset" : "none" }}
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/browse" className="active">
                      Browse
                    </Link>
                  </li>
                  <li>
                    <Link href="/details">Details</Link>
                  </li>
                  <li>
                    <Link href="/streams">Streams</Link>
                  </li>
                  <li>
                    <a
                      data-dropdown="#noanchor"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div
                        className="dropdown-menu dropdown-anchor-top-left"
                        id="noanchor"
                      >
                        <div
                          className="main-profile"
                          style={{ padding: "17px" }}
                        >
                          <ul style={{ paddingBottom: "8px" }}>
                            <li
                              style={{ padding: "0px" }}
                              className="shadow-none"
                            >
                              <div id="my-signin2"></div>
                            </li>
                            <li>
                              <div
                                id="spinner"
                                style={{
                                  background: "#4267b2",
                                  borderRadius: "5px",
                                  color: "white",
                                  height: "40px",
                                  textAlign: "center",
                                  width: "250px",
                                }}
                              >
                                Loading
                                <div
                                  className="fb-login-button"
                                  data-max-rows="1"
                                  data-size="large"
                                  data-button-type="continue_with"
                                  data-use-continue-as="true"
                                ></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      Profile <img src={profileheader?.src} alt="" />
                    </a>
                  </li>{" "}
                </ul>
              )}

              <Link href="#" className="menu-trigger">
                <span onClick={() => setDisplay(!display)}>Menu</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
