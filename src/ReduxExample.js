import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SideBar from './component/sidebar/SideBar';
const ReduxExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    // Dispatch an action to store the name and email in Redux store
    dispatch({ type: 'SET_USER', payload: { name, email } });

    // Redirect to NextScreen
    history.push('/nextscreen');
  };

  return (
    <>
     <div className="whole__page">
        <div className="left_side_navbar">
          <SideBar />
        </div>
        <div className="main_div ">
          <div className="main_inner_div">
          <div>
      <h2>Redux Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default ReduxExample;
