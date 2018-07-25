const handlebars=require('express-handlebars');
const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');

module.exports=(app)=>{
    app.engine('hbs',handlebars({
        extname:'.hbs',
        layoutsDir:'views/layouts',
        defaultLayout:'mainLayout'
    }))
    app.set('view engine','hbs');

    app.use(express.static(path.join(__dirname,'../static')));
    app.use(bodyParser.urlencoded({extended:true}));
}