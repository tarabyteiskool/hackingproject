const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();
const port = 3000;

app.use(basicAuth({
    users: { 'admin': 'secret' },
    challenge: true,
    realm: 'My Application',
}));

app.get('/', (req, res) => {
    res.send('You are authenticated!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
