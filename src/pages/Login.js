import React from 'react';
import { useNavigate} from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <Container 
      component="main" 
      maxWidth="xs" 
      className="login-container"
    >
      <Box className="login-box">
        <Paper className="login-paper">
          <Box className="login-content">
            <Typography 
              variant="h4" 
              component="h1" 
              className="login-title"
            >
              Welcome to PopX
            </Typography>
            
            <Typography 
              variant="body1" 
              className="login-description"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box className="login-buttons">
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate('/register')}
              className="login-button login-button-primary"
            >
              Create Account
            </Button>

            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate('/login-form')}
              className="login-button login-button-secondary"
            >
              Already Registered? Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login; 