const express = require('express');
const app = express();
const PORT = 3000;

app.get('/flights', (req, res) => {
  res.json([
    { id: 1, origin: 'London', destination: 'Paris', time: '10:00' },
    { id: 2, origin: 'Tokyo', destination: 'Sydney', time: '18:00' }
  ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 
