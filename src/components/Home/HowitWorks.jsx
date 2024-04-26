import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowitWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
              Create an Account and earn a chance to apply for various jobs.
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job/Post a Job</p>
            <p>
              Here You can find various categories of jobs and also be able to
              apply for it.
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Explore more</p>
            <p>
              Keep track of promising opportunities by saving them for later
              review. Access your saved jobs at any time to revisit job
              descriptions, company profiles, and application details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
