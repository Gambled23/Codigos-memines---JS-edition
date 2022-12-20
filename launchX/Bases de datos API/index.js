const express = require('express');
const app = express();
const port = 8080;
const programmingLanguajesRouter = require('./routes/programmingLanguajes');

app.use(express.json);
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    console.log('ayuda1')
    res.json({message: 'OK'});
    console.log('ayuda2')
});

app.use('/lenguajes', programmingLanguajesRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
})

app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`)
});