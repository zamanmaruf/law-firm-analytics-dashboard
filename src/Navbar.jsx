import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Dashboard', to: '/' },
  { label: 'Cases', to: '/cases' },
  { label: 'Clients', to: '/clients' },
  { label: 'Attorneys', to: '/attorneys' },
  { label: 'Reports', to: '/reports' },
  { label: 'Billing', to: '/billing' },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static" sx={{ bgcolor: 'success.main' }}>
        <Toolbar>
          {/* Logo Placeholder */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 3, fontWeight: 700 }}>
            Law Firm
          </Typography>
          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                sx={{ mx: 1, fontWeight: 600 }}
                component={NavLink}
                to={link.to}
                style={({ isActive }) => ({
                  borderBottom: isActive ? '2px solid #fff' : 'none',
                  color: '#fff',
                  borderRadius: 0,
                })}
              >
                {link.label.toUpperCase()}
              </Button>
            ))}
          </Box>
          {/* User Profile */}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
} 