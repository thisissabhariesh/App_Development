import React, { useState } from 'react';
import { Avatar, Card, CardContent, Divider, List, ListItem, ListItemText, Typography, Grid, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import ManageUsers from './ManageUsers'; // Import the ManageUsers component
import UserProgress from './UserProgress'; // Import the UserProgress component

// Animation for card hover effect
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
  borderRadius: '15px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    animation: `${hoverAnimation} 1s infinite`,
    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
  },
}));

const Admin = () => {
  const [users, setUsers] = useState([
    { email: 'john@example.com', password: 'password123', progress: 70 },
    { email: 'jane@example.com', password: 'password123', progress: 50 },
    { email: 'robert@example.com', password: 'password123', progress: 30 },
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Box sx={styles.pageContainer}>
      <Box sx={styles.container}>
        <Typography variant="h2" sx={styles.heading}>Admin Dashboard</Typography>
        <Typography variant="h4" sx={styles.subHeading}>Welcome to the admin dashboard.</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <AnimatedCard>
              <CardContent>
                <Typography variant="h5">Logged-In Users</Typography>
                <List>
                  {users.map((user, index) => (
                    <React.Fragment key={index}>
                      <ListItem>
                        <Avatar sx={styles.avatar}>{user.email[0]}</Avatar>
                        <ListItemText primary={user.email} />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </AnimatedCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnimatedCard>
              <CardContent>
                <Typography variant="h5">Statistics</Typography>
                <Typography variant="body1">Total Users: {users.length}</Typography>
                {/* Add more statistics as needed */}
              </CardContent>
            </AnimatedCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnimatedCard>
              <CardContent>
                <Typography variant="h5">Activity Log</Typography>
                {/* Add activity log content here */}
                <Typography variant="body1">No recent activity.</Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <ManageUsers users={users} onAddUser={handleAddUser} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <UserProgress users={users} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 70px)',
    margin: '0',
    padding: '0 20px',
    backgroundColor: '#f4f6f8',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    maxWidth: '1200px',
    width: '100%',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    borderRadius: '15px',
    backgroundColor: '#fff',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
  },
  subHeading: {
    marginBottom: '30px',
    fontSize: '24px',
    color: '#666',
  },
  card: {
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    borderRadius: '15px',
  },
  avatar: {
    marginRight: '15px',
    backgroundColor: '#7C0A02',
  },
};

export default Admin;
