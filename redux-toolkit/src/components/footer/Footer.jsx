import "./footer.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
const Footer = (props) => {
  const { isOpen, setIsOpen } = props;
  return (
    <footer>
      <div onClick={() => setIsOpen(!isOpen)} className="footer-container">
        {isOpen ? (
          <div>
            {" "}
            <AiFillCloseCircle />{" "}
          </div>
        ) : (
          <div>
            <IoMdAddCircle />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
