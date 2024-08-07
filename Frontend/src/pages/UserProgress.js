import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress } from '@mui/material';

const UserProgress = ({ users }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">User Progress</Typography>
      {users.map((user, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{user.email}</Typography>
            <Typography variant="body2">Progress: {user.progress}%</Typography>
            <LinearProgress variant="determinate" value={user.progress} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default UserProgress;
