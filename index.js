const express = require('express');
var sass = require('node-sass');
const app = express();
const PORT = 4574;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=31557600, s-maxage=31557600');
    res.send('Started Sucessfully');
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));