const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/contact', (req, res) => {
    // handle form submission here
    res.send('Form submitted successfully!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
