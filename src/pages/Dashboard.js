import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <Box className="dashboard-container">
      <Typography className="dashboard-title">Account Settings</Typography>
      <Box className="dashboard-profile-row">
        <Box className="dashboard-avatar-wrapper">
          <Avatar
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Marry Doe"
            className="dashboard-avatar"
            sx={{ width: 64, height: 64 }}
          />
          <IconButton className="dashboard-camera-btn" size="small">
            <PhotoCameraIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box className="dashboard-profile-info">
          <Typography className="dashboard-profile-name">Marry Doe</Typography>
          <Typography className="dashboard-profile-email">Marry@Gmail.Com</Typography>
        </Box>
      </Box>
      <Typography className="dashboard-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </Typography>
      <div className="dashboard-divider" />
      <div className="dashboard-content-placeholder" />
    </Box>
  );
}

export default Dashboard; 