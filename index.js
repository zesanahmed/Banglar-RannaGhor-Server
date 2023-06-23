const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Chef is cooking HaHaHa')
});


app.listen(port, () => {
    console.log(`Chef API is running on Port: ${port}`);
})