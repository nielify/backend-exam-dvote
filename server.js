const express = require('express');
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

//for parsing body contents
app.use(express.json());

//remove cors retriction
app.use(cors());

//login
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  //very simple login logic
  if (username === 'admin' && password === 'admin') res.send({ message: 'login successful' });
  else res.send({ message: 'failed to login' });
});

//user routes
app.use('/user', userRoutes);

//port
app.listen(3001, () => {
  console.log('listening on port 3001');
});

