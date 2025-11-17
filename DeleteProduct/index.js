const { ObjectId } = require("mongodb");
const { getClient } = require("../shared/mongoClient");

module.exports = async function (context, req) {
  const id = req.params.id;
  const collection = await getClient();

  const result = await collection.deleteOne({ _id: new ObjectId(id) });

  context.res = {
    status: result.deletedCount ? 200 : 404,
    body: result.deletedCount
      ? { message: "Produto removido" }
      : { message: "Produto não encontrado" }
  };
};
