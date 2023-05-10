const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false}));
// parse json
app.use(express.json());
// use people route
app.use('/api/people', peopleRouter);
// use login route
app.use('/login', authRouter);

app.get('/', (req, res) => {
    res.status(200).send('Home page');
})

app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
})