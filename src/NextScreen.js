import React from 'react';
import { useSelector } from 'react-redux';

import SideBar from './component/sidebar/SideBar';
const NextScreen = () => {
  const { name, email } = useSelector((state) => state.user);

  return (
    
    <>
       <div className="whole__page">
        <div className="left_side_navbar">
          <SideBar />
        </div>
        <div className="main_div ">
          <div className="main_inner_div">
          <div>
          <h2>Welcome to NextScreen!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextScreen;
