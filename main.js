const express = require ('express');
const cors = require ('cors');
const app = express();
const path = require ('path');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type:'application/vnd.api+json'}));
app.use(cors());

const port = process.env.PORT || 3000;
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));   
});

app.listen(port,() => console.log(`estou escultando`));