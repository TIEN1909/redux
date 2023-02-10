import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSuccess } from "../../redux/postSlice";
import Input from "../input/Input";
import "./post.css";
const PostPage = (props) => {
  const { setIsOpen } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [idx, setIdx] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const handleClose = () => {
    setIsOpen(false);
    const newsPost = {
      title: title,
      desc: desc,
      tags: idx,
    };
    dispatch(createSuccess(newsPost));
  };
  return (
    <div className="post-container">
      <h3 className="post-heading" onClick={handleClose}>
        Post
      </h3>
      <Input
        inputType="textarea"
        label="Title"
        data="Add a title"
        setData={setTitle}
      />
      <Input
        inputType="textarea"
        label="Description"
        data="Add some description"
        setData={setDesc}
      />
      {/* <label>Tags</label> */}
      <div className="btn-container">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`${
                index === idx ? `btn-tag-selected` : `btn-tag-${tag}`
              }`}
              onClick={() => setIdx(index)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default PostPage;
