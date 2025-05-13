import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  useTheme,
  useMediaQuery,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import '../styles/Register.css';

function Register() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setForm({ ...form, agency: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    console.log('Registration data:', form);
    navigate('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs" disableGutters={isMobile}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: { xs: 3, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            borderRadius: { xs: 0, sm: 1 },
          }}
        >
          <Box
            sx={{
              backgroundColor: 'primary.main',
              borderRadius: '50%',
              padding: 1.5,
              marginBottom: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PersonAddOutlinedIcon sx={{ color: 'white', fontSize: 28 }} />
          </Box>
          <Typography 
            component="h1" 
            variant="h5" 
            sx={{ 
              fontWeight: 600,
              marginBottom: 3,
            }}
          >
            Create your<br />PopX account
          </Typography>
          <form className="register-form" onSubmit={handleSubmit} autoComplete="off">
            <TextField
              label={<span>Full Name<span className="register-required">*</span></span>}
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="register-field"
              InputProps={{ className: 'register-input' }}
            />
            <TextField
              label={<span>Phone number<span className="register-required">*</span></span>}
              name="phone"
              value={form.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="register-field"
              InputProps={{ className: 'register-input' }}
            />
            <TextField
              label={<span>Email address<span className="register-required">*</span></span>}
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="register-field"
              InputProps={{ className: 'register-input' }}
            />
            <TextField
              label={<span>Password <span className="register-required">*</span></span>}
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="register-field"
              InputProps={{ className: 'register-input' }}
            />
            <TextField
              label={<span>Company name</span>}
              name="company"
              value={form.company}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="register-field"
              InputProps={{ className: 'register-input' }}
            />
            <FormControl component="fieldset" className="register-radio-group">
              <FormLabel component="legend" className="register-radio-label">
                Are you an Agency?<span className="register-required">*</span>
              </FormLabel>
              <RadioGroup
                row
                name="agency"
                value={form.agency}
                onChange={handleRadioChange}
              >
                <FormControlLabel value="yes" control={<Radio className="register-radio" sx={{ color: '#7B61FF', '&.Mui-checked': { color: '#7B61FF' } }} />} label="Yes" />
                <FormControlLabel value="no" control={<Radio className="register-radio" sx={{ color: '#BDBDBD', '&.Mui-checked': { color: '#7B61FF' } }} />} label="No" />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="register-btn"
            >
              Create Account
            </Button>
          </form>
          <Box 
            sx={{ 
              textAlign: 'center',
              mt: 2,
            }}
          >
            <Link 
              component={RouterLink} 
              to="/" 
              variant="body2"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {"Already have an account? Sign In"}
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Register; 