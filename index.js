const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is cooking HaHaHa')
});

app.get('/chefData', (req, res) => {
    res.send(chefData)
})

app.get('/chefData/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefData.find(chef => chef.id === id)
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`Chef API is running on Port: ${port}`);
})