// Import necessary components and icons
import React, { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20px',
          color: selected === title ? theme.palette.primary.main : theme.palette.text.primary,
          cursor: 'pointer',
        }}
        onClick={() => setSelected(title)}
      >
        {icon}
        <Typography style={{ marginLeft: '10px' }}>{title}</Typography>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState('Dashboard');

  // Menu items
  const menuItems = [
    { title: 'Dashboard', to: '/', icon: <HomeOutlinedIcon /> },
    { title: 'People', to: '/people', icon: <PeopleOutlinedIcon /> },
    { title: 'Contacts', to: '/contacts', icon: <ContactsOutlinedIcon /> },
    { title: 'Receipts', to: '/invoices', icon: <ReceiptOutlinedIcon /> },
    { title: 'Profile', to: '/profile', icon: <PersonOutlinedIcon /> },
    { title: 'Create User', to: '/form', icon: <HelpOutlinedIcon /> },
    { title: 'Bar Chart', to: '/bar-chart', icon: <BarChartOutlinedIcon /> },
    { title: 'Pie Chart', to: '/pie-chart', icon: <PieChartOutlinedIcon /> },
    { title: 'Timeline', to: '/timeline', icon: <TimelineOutlinedIcon /> },
    { title: 'Team', to: '/team ', icon: <PersonOutlinedIcon />},
    { title: 'Map', to: '/map', icon: <MapOutlinedIcon /> },
  ];

  // User details
  const user = {
    name: 'Abhay Sahani',
    role: 'Admin',
    avatar: '../../src/assets/avatar.png', // Adjusted image path
  };

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        width: '250px',
        minHeight: '100vh',
      }}
    >
      {/* MENU ICON */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          color: theme.palette.text.primary,
          cursor: 'pointer',
        }}
      >
        <Typography variant="h3">DEVELOPER</Typography>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
      </div>


      {/* USER */}
      <div style={{ marginBottom: '25px', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            width="100px"
            height="100px"
            src={user.avatar}
            alt="profile-user"
            
            style={{ cursor: 'pointer', borderRadius: '50%' }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h2" fontWeight="bold" style={{ color: theme.palette.text.primary, margin: '10px 0 0 0' }}>
            {user.name}
          </Typography>
          <Typography variant="h5" color={theme.palette.text.primary}>
            {user.role}
          </Typography>
        </div>
      </div>

      {/* MENU ITEMS */}
      <div style={{ paddingLeft: '20px' }}>
        {menuItems.map((menuItem) => (
          <Item
            key={menuItem.title}
            title={menuItem.title}
            to={menuItem.to}
            icon={menuItem.icon}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </Box>
  );
};

export default Sidebar;
