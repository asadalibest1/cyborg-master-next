"use client";
import React, { useState } from "react";
import popularImg from "@/assets/images/popular-01.jpg"; // Update the path as needed

const Create1 = ({ modal }) => {
  const [image, setImage] = useState(popularImg); // Assuming default image
  const [groupHeading, setGroupHeading] = useState(""); // Assuming you want to dynamically set this

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result); // Set uploaded image as modal image
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleCreateClick = () => {
    // Implement your logic for "Create +" button here
    console.log("Create button clicked");
  };

  return (
    <div className="modal_container">
      <div
        className="page-content modal_wrapper modal_content"
        style={{ transform: `scale(${modal})` }}
      >
        <div className="circle_io close_btn">
          <i className="fa fa-times"></i>
        </div>

        <div className="most-popular show_group">
          <div>
            <div className="item">
              <img src={image} className="group_image" alt="" />

              <i className="fa fa-upload fa-upload-group" aria-hidden="true">
                <input
                  type="file"
                  className="input_image_group"
                  onChange={handleFileChange}
                />
              </i>

              <div className="inner_row">
                <h4 className="group_heading">{groupHeading}</h4>
              </div>
            </div>

            <div className="main-button">
              <button onClick={handleCreateClick} className="close_btn">
                Create +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create1;
