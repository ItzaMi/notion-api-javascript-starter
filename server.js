const express = require('express');
const moduleToFetch = require('./index');
const getDatabase = moduleToFetch.getDatabase;
const port = 8000;

const app = express();

app.use(express.static('public'));
app.use(
  express.urlencoded({
    extended: true,
  })
);

/**
 * We're creating a route that we can connect to
 * When working with the front-end
 * Check `main.js` to see the `fetch`
 */
app.get('/notion', async (req, res) => {
  const notion = await getDatabase();
  res.json(notion);
});

app.listen(port, console.log(`Server started on ${port}`));
