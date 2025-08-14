const express = require('express');
const path = require('path');
const app = express();
// app.use(express.static(path.join(__dirname, 'public')));
let counter = 0;
app.get('/', (req, res) => {
  counter++;
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My Static Site with Counter 1</title>
      </head>
      <body>
          <h1>Welcome to My Static Site 1</h1>
          <p>This is a simple static site served with Express.</p>
          <p>Page views: ${counter}</p>
      </body>
      </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
