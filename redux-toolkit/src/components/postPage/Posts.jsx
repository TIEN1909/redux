import { useSelector } from "react-redux";
import "./post.css";
const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  return (
    <div className="post-wrapper">
      {posts.slice(1).map((post, index) => {
        return (
          <>
            <div className="post-box" key={index}>
              <div className="post-title">{post.title}</div>
              <div className={`btn-tag-${tags[post.tags]} post-tags`}>
                {tags[post.tags]}
              </div>
              <div className="post-desc">
                <span>{post.desc}</span>
                <span className={`time-${tags[post.tags]} time`}>
                  {" "}
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Posts;
