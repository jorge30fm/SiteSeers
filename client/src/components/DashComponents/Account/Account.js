import React from "react";
import "./Account.css";
import Edit from "@mui/icons-material/Edit";

const Account = () => {
  const handleDivClick = (e) => {
    const clickedDiv = e.target;
    const text = clickedDiv.textContent;
    const inputEl = document.createElement("textarea");
    inputEl.classList.add("input-to-text");
    inputEl.value = text;
    inputEl.addEventListener("blur", divOnBlur);
    clickedDiv.replaceWith(inputEl);
    inputEl.focus();
  };

  const divOnBlur = (e) => {
    const inputEl = e.target;
    const text = inputEl.value;
    const divEl = document.createElement("p");
    divEl.classList.add("text-to-input");
    divEl.textContent = text;
    divEl.addEventListener("click", handleDivClick);
    inputEl.replaceWith(divEl);
  };

  return (
    <div>
      <div className="flex-row justify-space-between">
        <div className="pfp-container">
          <div className="pfp"></div>
          <Edit className="account-edit-icon" />
        </div>
        <div className="flex-column align-center">
          <h3>User Name</h3>
          <p>Member since insertDate</p>
        </div>
      </div>
      <div className="account-div flex-column">
        <div className="account-input-div flex-column">
          <p>About:</p>
          <div className="input-container about-container">
            <p onClick={handleDivClick} className="text-to-input">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="account-input-div flex-column ">
          <p>Email:</p>
          <div className="input-container">
            <p onClick={handleDivClick} className="text-to-input">email@email.com</p>
          </div>
        </div>
        <div className="account-input-div flex-column">
          <p>Phone:</p>
          <div className="input-container">
            <p onClick={handleDivClick} className="text-to-input">123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn">Save</button>
      </div>
    </div>
  );
};
export default Account;
