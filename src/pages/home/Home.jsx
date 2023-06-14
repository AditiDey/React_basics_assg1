import React, { useEffect } from 'react';
import '../dashboard/Team.css';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import SideBar from '../../component/sidebar/SideBar';
import { useState } from 'react';

const Home = () => {
  const his = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <div className="whole__page">
        <div className="left_side_navbar">
          <SideBar />
        </div>
        <div className="main_div ">
          <div className="main_inner_div">
            {/* write code  */}

            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 col-12 mx-auto mb-3">
                  <img
                    src="https://arthmate-p2p-public-assets.s3.ap-south-1.amazonaws.com/images/arthmate-direct/landing.svg"
                    alt=""
                    className="int_img"
                  />
                </div>
                <div className="col-md-6 col-12 mx-auto mb-3">
                  <div className="card p-2">
                    <h3>Contact Us</h3>
                    <form>
                      <div class="form-group">
                        <label for="usr">Name:</label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="pwd">Email:</label>
                        <input
                          type="email"
                          class="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="pwd">Phone:</label>
                        <input
                          type="Phone"
                          class="form-control"
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="text-center">
                        <button className="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <p>
                  Arthmate is a new-age B2B fintech that is pioneering solutions
                  at the intersection of credit risk, technology and data
                  sciences.
                </p>
                <p>
                  Arthmate’s plug-and-play platform enables its partners to
                  offer credit as an embedded capability without any lending
                  infra setup at their end. Arthmate services its embedded
                  fintech platform through its in-house NBFC and co-lending
                  partners. Arthmate is also building India’s premier P2P
                  platform that will provide HNIs with the choice to invest in a
                  basket of diversified risk pools already underwritten by
                  India’s meta risk engine.
                </p>
                <p>
                  Arthmate was started by Ranjan Kant, who has two decades worth
                  of experience across marquee consulting firms and successful
                  startups. The company is powered by a high-quality leadership
                  team with decades of experience in major global and Indian
                  financial services, technology and consulting firms.{' '}
                </p>
              </div>
            </div>

            {/* /// code  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
