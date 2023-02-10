import React from "react";
import { useSelector } from "react-redux";
import "./header.css";

const Header = (props) => {
  const { setIsOpen, setEdit } = props;
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    setEdit(true);
    setIsOpen(false);
  };
  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(to top, rgb(12, 12, 12) 8%, ${user.theme}`,
        }}
      >
        <div className="info-container">
          <div className="info-wrapper">
            <div className="info-edit">
              <button className="btn" onClick={handleClick}>
                Edit
              </button>
            </div>
            <div className="info-ava">
              <img src={user.avaUrl} alt="" className="info-image" />
            </div>
            <p className="info-name">{user.name}</p>
            <span className="info-age">{user.age} years old</span>
            <p className="info-description">{user.about}</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
