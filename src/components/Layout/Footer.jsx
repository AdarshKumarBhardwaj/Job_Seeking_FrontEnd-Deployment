import React, { useContext } from "react";
import { Context } from "../../main";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Right Reserved By Adarsh</div>
      <div>
        <Link to={"https://github.com/AdarshKumarBhardwaj"} target="_blank">
          <FaGithub />
        </Link>

        <Link
          to={"https://www.linkedin.com/in/adarsh-kumar-279370272/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={"/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
