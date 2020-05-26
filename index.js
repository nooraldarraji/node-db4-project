const server = require('./server');

const port = process.env.PORT || 5000;

server.use('/', (req, res) => {
    res.send('<h3>NodeJS</h3>')
});

server.listen(port, () => {
    console.log(`\n == Listinging on Port: ${port} == \n`)
});