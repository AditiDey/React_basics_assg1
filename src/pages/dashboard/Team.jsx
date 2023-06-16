import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SideBar from '../../component/sidebar/SideBar';

const Team = () => {
  const history = useHistory();
  const selectedOption = useSelector((state) => state.selectedOption);
  const aboutUsDetails = useSelector((state) => state.aboutUsDetails);

  const handleDropdownChange = (event) => {
    history.push(`/team/${event.target.value}`);
  };

  const renderTeamDetails = () => {
    if (!aboutUsDetails) {
      return null;
    }

    const { name, email, phone } = aboutUsDetails;

    if (selectedOption === 'tech') {
      return (
        <div>
          <br />
          <h5>Technical Team</h5>
          {/* Render details of technical team members */}
          {/* Use the about us details from Redux state in the text fields */}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card team">
                <img src="http://localhost:3000/image/shivani.jpg" alt="" />
                <div className="p-2">
                  <h2>Shivani Gupta</h2>
                  <p>Software Engineer 2</p>
                  <p>Phone Number: {phone}</p>
                  <p>Email id: {email}</p>
                </div>
              </div>
            </div>
            {/* Add more technical team members */}
          </div>
        </div>
      );
    } else if (selectedOption === 'product') {
      return (
        <div>
          <br />
          <h5>Product Team</h5>
          {/* Render details of product team members */}
          {/* Use the about us details from Redux state in the text fields */}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card team">
                <img src="http://localhost:3000/image/simran.jpg" alt="" />
                <div className="p-2">
                  <h2>Simran Singh</h2>
                  <p>Associate Product Manager</p>
                  <p>Phone Number: {phone}</p>
                  <p>Email id: {email}</p>
                </div>
              </div>
            </div>
            {/* Add more product team members */}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="whole__page">
        <div className="left_side_navbar">
          <SideBar />
        </div>
        <div className="main_div ">
          <div className="main_inner_div">
            <div className="container mt-5">
              <h2>Team Page</h2>
              <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Select an option</option>
                <option value="tech">Tech</option>
                <option value="product">Product</option>
              </select>
              {renderTeamDetails()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
