const express = require('express');
const methodOverride = require ('method-override')
const cors = require('cors')

const app = express();
const path = require('path');
const puerto = process.env.PORT;

const homeRouter = require('./routes/homeRouter');
const apiMovementsRouter = require('./routes/api/apiMovementRouter');

app.set('views', path.resolve(__dirname, './views'));
app.set ('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
;


app.use('/', homeRouter);
app.use('/api/movements',apiMovementsRouter);





app.listen (puerto || 3000, () => {
    console.log('Servidor levantado en el puerto 3000');
});