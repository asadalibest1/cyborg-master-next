import React from 'react';

const Success = ({ modal }) => {
  const handleDoneClick = () => {
    // Logic to handle "I'm done" click
    console.log("I'm done clicked");
  };

  const handleCreateNewClick = () => {
    // Logic to handle "Create a new" click
    console.log("Create a new clicked");
  };

  return (
    <div className="modal_container">
            <div className="page-content modal_wrapper modal_content" style={{ transform: `scale(${modal})` }}>
        <div className="circle_io close_btn">
          <i className="fa fa-times"></i>
        </div>
        <div className="most-popular stars_bg" style={{ display: 'block' }}>
          <img src="https://i.gifer.com/origin/20/209a6bafa4fdc5285713a69a7c6f705b_w200.gif" className="stars stars_1" alt="Star Background 1" />
          <img src="https://i.gifer.com/origin/20/209a6bafa4fdc5285713a69a7c6f705b_w200.gif" className="stars stars_2" alt="Star Background 2" />
          <h4>Congratulations!</h4>
          <p className="last_para">Your group has been created in the List</p>
          <div className="main-button main-button_last">
            <button onClick={handleDoneClick} className="close_btn">I'm done</button>
            <button onClick={handleCreateNewClick} className="close_btn">Create a new</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
