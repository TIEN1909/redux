import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditInfo from "./components/edit/EditInfo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PostPage from "./components/postPage/PostPage";
import Posts from "./components/postPage/Posts";

function App() {
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="app">
      <>
        {edit ? (
          <>
            <EditInfo setEdit={setEdit} />
          </>
        ) : !edit && !isOpen ? (
          <>
            <Header setIsOpen={setIsOpen} setEdit={setEdit} />
            <Posts />
            <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : (
          <>
            <Header setIsOpen={setIsOpen} setEdit={setEdit} />
            <PostPage setIsOpen={setIsOpen} />
            <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
        {pending && (
          <p style={{ color: "white", textAlign: "center" }}>Loading...</p>
        )}
        {!edit && error && (
          <p style={{ color: "red", textAlign: "center" }}>
            {" "}
            Error when fetching data from server !!!
          </p>
        )}
      </>
    </div>
  );
}

export default App;
