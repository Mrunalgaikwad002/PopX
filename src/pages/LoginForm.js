import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import '../styles/LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // here the logic part will be updated
    navigate('/dashboard');
  };

  return (
    <Box className="login-form-outer">
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <Typography className="login-form-title">Signin to your<br />PopX account</Typography>
        <Typography className="login-form-desc">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </Typography>
        <TextField
          label={<span className="login-form-label-main">Email Address<span className="login-form-required">*</span></span>}
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          className="login-form-field"
          InputProps={{ className: 'login-form-input' }}
          placeholder="Enter email address"
        />
        <TextField
          label={<span className="login-form-label-main">Password<span className="login-form-required">*</span></span>}
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          className="login-form-field"
          InputProps={{ className: 'login-form-input' }}
          placeholder="Enter password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="login-form-btn"
          disabled={!form.email || !form.password}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm; 