
import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }}>
            <Button variant="contained" color="secondary">
              Home
            </Button>
          </Link>
          <Link to="/add" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button variant="contained" color="secondary">
              Add
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
