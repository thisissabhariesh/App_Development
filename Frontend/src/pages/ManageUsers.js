import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ManageUsers = ({ users, onAddUser }) => {
  const [newUser, setNewUser] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (newUser.email && newUser.password) {
      onAddUser(newUser);
      setNewUser({ email: '', password: '' });
    } else {
      alert('Please fill in both email and password');
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Manage Users</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <TextField
          label="Email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={newUser.password}
          onChange={handleInputChange}
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Existing Users</Typography>
        {users.map((user, index) => (
          <Typography key={index}>
            {user.email}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ManageUsers;
