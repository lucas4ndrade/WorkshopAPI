const batatinhaModel = require('../model/batatinha');

async function create(name, cpf) {
  const batatinha = new batatinhaModel({
    name,
    cpf,
  });

  await batatinha.save();
}

module.exports = {
  create,
};
