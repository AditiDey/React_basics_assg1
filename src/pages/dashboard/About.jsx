import React, { useEffect } from 'react';
import './Team.css';
import { useHistory } from 'react-router-dom';
import SideBar from '../../component/sidebar/SideBar';

const About = () => {
  const his = useHistory();

  return (
    <>
      <div className="whole__page">
        <div className="left_side_navbar">
          <SideBar />
        </div>
        <div className="main_div ">
          <div className="main_inner_div">
            <h2>About Us</h2>
            <p>
              Arthmate is India's premier embedded fintech platform leveraging
              technology to provide on-demand seamless deployment of credit
              across fintechs, digital platforms and SME anchors. With our
              at-scale credit exchange platform, we strive to transform digital
              lending through proprietary tech and advanced analytics solutions.
            </p>
            <img
              src="https://www.arthmate.com/storage/company/2022-12-30-63ae7284252bc.png"
              alt=""
            />
            <br />
            <button
              onClick={() => (window.location.href = 'https://arthmate.com')}
              className="btn btn-primary"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
