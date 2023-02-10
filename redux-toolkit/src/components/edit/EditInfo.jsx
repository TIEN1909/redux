import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiRequests";
import Input from "../input/Input";
import "./edit.css";
const avaUrl = [
  "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
  "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
  "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
  "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
  "https://i.redd.it/7ipyf6pvqac61.png",
  "https://i.redd.it/ksmb0m02ppy51.png",
  "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
  "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
];

const EditInfo = (props) => {
  const { setEdit } = props;
  const user = useSelector((state) => state.user); // use selector lấy dữ liệu để làm
  const dispatch = useDispatch(); // useDispatch truyền dữ liệu

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.theme);
  const [url, setUrl] = useState(user.avaUrl);

  const handelSubmitt = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      theme: theme,
    };
    updateUser(updatedUser, dispatch);
  };
  return (
    <form onSubmit={handelSubmitt}>
      <section className="edit-container">
        <div className="edit-btn">
          <button className="save-btn">SAVE</button>
        </div>
        <h3 className="edit-title">Edit profile</h3>
        <div className="edit-wrapper">
          <Input label="Display name" data={user.name} setData={setName} />
          <Input label="Age" data={user.age} setData={setAge} />
          <Input
            inputType="textarea"
            label="About"
            data={user.about}
            setData={setAbout}
          />
        </div>
        <label style={{ marginTop: "20px" }}> Profile Picture</label>
        <div className="edit-picture">
          {avaUrl.map((url) => {
            return (
              <div className="edit-image" key={url}>
                <img
                  src={url}
                  className="edit-img"
                  onClick={(e) => setUrl(e.target.src)}
                />
              </div>
            );
          })}
        </div>
        <div className="edit-color">
          <label> Colors:</label>
          <input
            className="color-input"
            type="color"
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>
      </section>
    </form>
  );
};

export default EditInfo;
