import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: '0 20px',
        borderBottom: '2px solid #ddd',
        paddingBottom: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Added shadow here
      }}
    >
      <Link to="/" style={{ margin: '0' }}>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '48px',
            height: '48px',
          }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          About
        </Link>
        <Link
          to="/features"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Features
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Contact
        </Link>
        <Link
          to="/login"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Login
        </Link>
        {/* <Link
          to="/register"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Register
        </Link> */}
        {/* <a
          href="#exercises"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a> */}
      </Stack>
    </Stack>
  );
}

export default Navbar;
