const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve all files in the current directory as static
app.use(express.static(path.join(__dirname)));

// Send index.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
