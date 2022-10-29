const express = require('express');
const http = require('http');
const hostname = '0.0.0.0'
const app = express();

const router = express.Router();

const port = 3000;
const cors = require('cors');

const about = [
    {
        "slackUserName": "cindicate",
        "Backend": true,
        "Age": 30,
        "Bio": "Always working and finding solutions to challenges that builds me as a person and also to the growth of my workplace, my day to day activities has emphasis on professionalism, training, hard-work, dedication and most importantly achievement of goals that has been set out.,Belief in,teamwork approach to achieve efficiency and availability of adequate technology support to carry out assigned tasks using personal initiative and requiring minimal, supervision."
    },
];
app.use(cors({
    origin:"*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
}))


app.get('/', (req, res) => {
    res.send('Hello World')
});


// app.get('/users',(req, res)=> {
//     res.send(about);
// })

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(about);
});
//const port = process.env.PORT || 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
//app.listen(port, () => console.log(`Listening on Port ${port}`));