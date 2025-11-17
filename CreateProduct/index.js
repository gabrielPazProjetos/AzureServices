const { getClient } = require("../shared/mongoClient");

module.exports = async function (context, req) {
  const product = req.body;
  const collection = await getClient();
  const result = await collection.insertOne(product);

  context.res = {
    status: 201,
    body: { id: result.insertedId, ...product }
  };
};
