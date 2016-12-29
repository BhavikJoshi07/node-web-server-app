const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear' , () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle : 'Home Page',
        welcomeMessage : 'Welcome to WestWorld.'
    });
});

app.get('/about', (req,res) => {
    res.send({
        name : 'Bhavik',
        likes: [
            'soccer',
            'node'
        ]
    });
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage : 'Unable to handle request'
    });
});

app.listen(port , () => {
    console.log(`Server started at Port ${port}`);
});