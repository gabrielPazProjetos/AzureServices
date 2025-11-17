const { ObjectId } = require("mongodb");
const { getClient } = require("../shared/mongoClient");

module.exports = async function (context, req) {
  const id = req.params.id;
  const updates = req.body;
  const collection = await getClient();

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updates }
  );

  context.res = {
    status: result.matchedCount ? 200 : 404,
    body: result.matchedCount
      ? { message: "Produto atualizado" }
      : { message: "Produto não encontrado" }
  };
};
