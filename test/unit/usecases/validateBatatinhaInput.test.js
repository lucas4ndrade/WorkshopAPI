const { BadRequestError } = require('../../../errors/httpErrors');

const sut = require('../../../usecases/validateBatatinhaInput');

describe('Testing validataBatatinhaInput execute', () => {
  it('Should throw the correct error if the provided body is invalid', () => {
    expect(
      () => sut.execute(undefined),
    ).toThrow(BadRequestError);
  });
  it('Should throw the correct error if the name is empty', () => {
    expect(
      () => sut.execute({cpf: "batatinha"}),
    ).toThrow(BadRequestError);
  });
  it('Should throw the correct error if the cpf is empty', () => {
    expect(
      () => sut.execute({name: "batatinha"}),
    ).toThrow(BadRequestError);
  });
  it('Should NOT throw any errors if the provided body is valid', () => {
    expect(
      () => sut.execute({
        name: "batatinha",
        cpf: "123234",
      }),
    ).not.toThrow();
  });
});
