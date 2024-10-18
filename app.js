const express = require('express');
const app = express();
const port = 3000;
const expenseRoutes = require('./routes/expenseRoutes');  // Import routes
const sequelize = require('./database');

// Middleware to parse incoming JSON requests
app.use(express.json());

app.use('/api', expenseRoutes);  // Use expense routes under the /api path

// Start the server
sequelize.sync().then(() => {
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
});
