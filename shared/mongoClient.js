const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
let client = null;

async function getClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db("productsdb").collection("products");
}

module.exports = { getClient };
