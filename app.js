const express = require('express');
const app = express();

const router = express.Router();

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


app.get('/users',(req, res)=> {
    res.send(about);
})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port ${port}`));