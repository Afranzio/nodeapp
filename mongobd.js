
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://afranzio:6264@cluster0-3ld0v.gcp.mongodb.net/Auth?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Auth").collection("genex-auth");
  // perform actions on the collection object
  console.log("Connected to DB")
  client.close();
});
