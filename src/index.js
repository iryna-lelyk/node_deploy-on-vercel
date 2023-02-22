const express = require('express');
const { router: usersRouter } = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/users', usersRouter);

app.listen(9000, () => {
  console.log('Server is running on localhost:9000')
})
