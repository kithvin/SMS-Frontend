import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Management System
          </Typography>
          <Button color="inherit" sx={{
              backgroundColor: '#007bff', // Blue background color
              color: '#fff', // White text color
              fontWeight: 'bold', // Bold text
              '&:hover': {
                backgroundColor: '#0056b3', // Darker blue on hover
              },
              marginLeft: 1, // Margin between buttons
              padding: '8px 16px', // Padding inside the button
              borderRadius: 1, // Rounded corners
            }}>Add Teacher</Button>

          <Button color="inherit"sx={{
              backgroundColor: '#28a745', // Green background color
              color: '#fff', // White text color
              fontWeight: 'bold', // Bold text
              '&:hover': {
                backgroundColor: '#218838', // Darker green on hover
              },
              marginLeft: 1, // Margin between buttons
              padding: '8px 16px', // Padding inside the button
              borderRadius: 1, // Rounded corners
            }}>Add Student</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
