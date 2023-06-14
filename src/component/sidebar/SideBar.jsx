import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './SideBar.css';

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
];
const SideBar = () => {
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => e.path === pathname);
  const loc = useLocation();
  // console.log(loc.pathname.split('/')[1].length);

  return (
    <>
      <div className="side_navbar_inner">
        {headerNav?.map((val, i) => {
          return (
            <>
              <NavLink
                key={i}
                to={val.path}
                className={i === active ? 'active' : ''}
              >
                {val.display}
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
