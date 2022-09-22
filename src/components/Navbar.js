import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/Calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/Quote',
    text: 'Quote',
  },
];

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    color: isActive ? '#ff8c00' : '#d9d9d9',
  });
  const headerStyle = {
    color: '#d9d9d9',
    fontSize: '1.5rem',
    padding: '20px',
    lineHeight: '1.5em',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    background: '#c55d37',
  };

  const titleStyle = {
    color: '#d9d9d9',
  };

  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}> Math Magecian </h1>
        <nav className="navBar">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} style={navLinkStyle}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
