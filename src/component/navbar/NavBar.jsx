import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const NavBar = ({ userDetails, loginstaus }) => {
  const login = localStorage.getItem('_hecord_access_user_login');
  const [searchcheck, setSearchCheck] = useState(false);
  const [search, setSearch] = useState('');
  const [logoutstatus, setLogoutstatus] = useState(false);
  const [status, setStatus] = useState(loginstaus);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSub = async (e) => {
    e.preventDefault();
    setSearchCheck(false);
  };
  const headerNav = [
    {
      display: 'Introduction',
      path: '/home',
    },
    {
      display: 'Team',
      path: '/team',
    },
    {
      display: 'AboutUs',
      path: '/about',
    },
    {
      display:'ReduxExample',
      path:'/reduxexample',
    },
    {
      
        display:'NextScreen',
        path:'/nextScreen',
      
    },
    {
      
      display:'Apicall',
      path:'/Apicall',
    
  },
  
  ];

  return (
    <>
      <div className="whole_nav">
        <nav className="navbar navbar-expand-lg navbar-light bglight">
          <div className="dflex">
            <MenuIcon
              className="cur mr-2 resp_dis"
              onClick={() => setOpen(true)}
            />
            <NavLink
              to="/home"
              className="navbar-brand text-custom font-weight-bold dflex"
            >
              <img
                src="https://www.arthmate.com/storage/company/2022-12-30-63ae7284252bc.png"
                alt=""
                className="logoimg"
              />
            </NavLink>
          </div>

          <div>
            <NavLink to="/login" className="navitem">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-primary">
              Get Started
            </NavLink>
          </div>
        </nav>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Toolbar className="nav-wid">
            <NavLink to="/" onClick={() => setOpen(false)}>
              <h3>
                ARTHMATE<span>.</span>
              </h3>
            </NavLink>
          </Toolbar>

          {/* <Divider /> */}

          <List disablePadding className="listsize">
            {headerNav.map((v) => {
              return (
                <>
                  <ListItem
                    button
                    component={Link}
                    to={`/${v.path}`}
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText primary={`${v.display}`} />
                  </ListItem>
                </>
              );
            })}
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;
