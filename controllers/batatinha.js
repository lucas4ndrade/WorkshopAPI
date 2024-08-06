const batatinhaRepo = require('../repositories/batatinha');


function quandoNasceHandler(req, res, next) {
  console.log("QUANDO NASCE");

  res.status(200).json({});
}

function esparramaHandler(req, res, next) {
  console.log("ESPARRAMA PELO CHÃO");

  res.status(200).json({});
}

async function createBatatinha(req, res, next) {
  try {
    console.log("SENDO CRIADA");

    validateInput(req.body);

    await batatinhaRepo.create(req.body.name, req.body.cpf);

    res.status(200).json({});
  } catch (err) {
    next(err);
  }
}

function validateInput(body) {
  if (!body.name) {
    throw new BadRequestError('Name cannot be empty');
  }

  if (!body.cpf) {
   throw new BadRequestError('CPF cannot be empty');
  }
}

module.exports = {
  quandoNasceHandler,
  esparramaHandler,
  createBatatinha,
};
