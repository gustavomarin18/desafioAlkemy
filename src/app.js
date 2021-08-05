const express = require('express');
const methodOverride = require ('method-override')

const app = express();
const path = require('path');
const puerto = process.env.PORT;

const homeRouter = require('./routes/homeRouter');

app.set('views', path.resolve(__dirname, './views'));
app.set ('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));


app.use('/', homeRouter);


app.listen (puerto || 3000, () => {
    console.log('Servidor levantado en el puerto 3000');
});