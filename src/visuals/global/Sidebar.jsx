import React, { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        color:
          selected === title
            ? theme.palette.primary.main
            : theme.palette.text.primary,
        cursor: "pointer",
      }}
      onClick={() => setSelected(title)}
    >
      {icon}
      <Typography style={{ marginLeft: "10px" }}>{title}</Typography>
      <Link to={to} />
    </div>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState("Dashboard");

  // User details
  const user = {
    name: "Abhay Sahani",
    role: "Admin",
    avatar: "../../assets/avatar.png", // Corrected image path
  };

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        width: "250px",
        minHeight: "100vh",
      }}
    >
      {/* MENU ICON */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          color: theme.palette.text.primary,
          cursor: "pointer",
        }}
      >
        <Typography variant="h3">DEVELOPER</Typography>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
      </div>

      {/* USER */}
      <div style={{ marginBottom: "25px", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="100px"
            height="100px"
            src={user.avatar}
            alt="profile-user"
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            style={{ color: theme.palette.text.primary, margin: "10px 0 0 0" }}
          >
            {user.name}
          </Typography>
          <Typography variant="h5" color={theme.palette.text.primary}>
            {user.role}
          </Typography>
        </div>
      </div>

      {/* MENU ITEMS */}
      <div style={{ paddingLeft: "20px" }}>
        <Item
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        {/* Add more menu items as needed */}
      </div>
    </Box>
  );
};

export default Sidebar;
