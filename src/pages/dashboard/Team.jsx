import React, { useEffect } from 'react';
import './Team.css';
import { useHistory } from 'react-router-dom';
import SideBar from '../../component/sidebar/SideBar';
import { useState } from 'react';

const Team = () => {
  const his = useHistory();

  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderTeamDetails = () => {
    if (selectedOption === 'tech') {
      return (
        <div>
          <br />
          <h5>Technical Team</h5>
          {/* Render details of technical team members */}

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card team">
                <img src="http://localhost:3000/image/shivani.jpg" alt="" />
                <div className="p-2">
                  <h2>Shivani Gupta</h2>
                  <p>Software Engineer 2</p>
                  <p>Phone Number:9630508256</p>
                  <p>Email id:shivani.gupta@arthmate.co.in</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card team">
                <img src="http://localhost:3000/image/kartheek.jpg" alt="" />
                <div className="p-2">
                  <h2>Gopi Kartheek</h2>
                  <p>Software Engineer</p>
                  <p>Phone Number:9381272954</p>
                  <p>Email id:gopi.kartheek@arthmate.co.in</p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card team">
                <img src="http://localhost:3000/image/mr_p.jpg" alt="" />
                <div className="p-2">
                  <h2>Prarabdha Soni</h2>
                  <p>Software Engineer 2</p>
                  <p>Phone Number:8118898113</p>
                  <p>Email id:prarabdha.soni@arthmate.co.in</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card team">
                <img src="http://localhost:3000/image/pradeep.jpg" alt="" />
                <div className="p-2">
                  <h2>Pradeep Jaiswal</h2>
                  <p>Software Engineer </p>
                  <p>Phone Number:9987074788</p>
                  <p>Email id:pradeep.jaiswal@arthmate.co.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedOption === 'product') {
      return (
        <div>
          <br />
          <h5>Product Team</h5>
          {/* Render details of product team members */}

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card team">
                <img src="http://localhost:3000/image/simran.jpg" alt="" />
                <div className="p-2">
                  <h2>Simran Singh</h2>
                  <p>Associate Product Manager</p>
                  <p>Phone Number:8357016347</p>
                  <p>Email id:simran.singh@arthmate.co.in</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12  mb-3">
              <div className="card team">
                <img src="http://localhost:3000/image/raj.jpg" alt="" />
                <div className="p-2">
                  <h2>Raj Vikram Singh</h2>
                  <p>Associate Product Manager</p>
                  <p>Phone Number:9871569779</p>
                  <p>Email id:raj.singh@arthmate.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add more product team members */}
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