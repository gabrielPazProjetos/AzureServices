const { getClient } = require("../shared/mongoClient");

module.exports = async function (context, req) {
  const collection = await getClient();
  const products = await collection.find({}).toArray();

  context.res = {
    status: 200,
    body: products
  };
};
