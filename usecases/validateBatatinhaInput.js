const { BadRequestError } = require('../errors/httpErrors');

const execute = (body) => {
  if (!body) {
    throw new BadRequestError('The provided body was invalid');
  }

  if (!body.name) {
    throw new BadRequestError('Name cannot be empty');
  }

  if (!body.cpf) {
   throw new BadRequestError('CPF cannot be empty');
  }
};

module.exports = {
  execute,
};
