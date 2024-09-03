const batatinhaRepo = require('../repositories/batatinha');
const validateBatatinhaUseCase = require('../usecases/validateBatatinhaInput');

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
    validateBatatinhaUseCase.execute(req.body);

    const newBatata = await batatinhaRepo.create(req.body.name, req.body.cpf);

    res.status(200).json(newBatata);
  } catch (err) {
    next(err);
  }
}


module.exports = {
  quandoNasceHandler,
  esparramaHandler,
  createBatatinha,
};
