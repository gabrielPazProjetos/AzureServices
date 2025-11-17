const { ObjectId } = require("mongodb");
const { getClient } = require("../shared/mongoClient");

module.exports = async function (context, req) {
  const id = req.params.id;
  const collection = await getClient();
  const product = await collection.findOne({ _id: new ObjectId(id) });

  context.res = {
    status: product ? 200 : 404,
    body: product || { message: "Produto não encontrado" }
  };
};
