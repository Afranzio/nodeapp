const  express = require("express");
 const app = express();

app.use('/update', () => {
    console.log('You need to have time')
})

app.get('/', (rep,res) => {
    res.send("Good start");
})

const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb')
const uri = "mongodb+srv://afranzio:6264@cluster0-3ld0v.gcp.mongodb.net/Auth?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Auth").collection("genex-auth");
  console.log("Connected to DB")
  client.close();
});

app.get('/update', (rep,res) => {
    res.send("Gohead");
})

 app.listen(3000);