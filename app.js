const express = require('express');
const app = express();
const members = require('./members');
const users = require('./users');

// Route untuk home page
app.get('/', (req, res) => {
  res.send('This is the home page');
});

// Route untuk about page
app.get('/about', (req, res) => {
  const currentDate = new Date().toISOString();
  const responseData = {
    Status: 'success',
    Message: 'response success',
    Description: 'Exercise #03',
    Date: currentDate,
    Data: members.getMembers(),
  };

  res.json(responseData);
});

// Route untuk users page
app.get('/users', async (req, res) => {
  try {
    const usersData = await users.getUsers();
    res.json(usersData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Port server akan berjalan pada port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${PORT}`);
});