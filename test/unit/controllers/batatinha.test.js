const batatinhaRepo = require('../../../repositories/batatinha');
const validateBatatinhaUseCase = require('../../../usecases/validateBatatinhaInput');

const sut = require('../../../controllers/batatinha');


describe('Testing batatinha controller createBatatinha', () => {
  beforeEach(() => {
    this.validateUsecaseStub = jest.spyOn(validateBatatinhaUseCase, 'execute').mockReturnValue(true);
    this.batatinhaCreateStub = jest.spyOn(batatinhaRepo, 'create').mockReturnValue({});

    this.nextMock = jest.fn();
    this.reqMock = {
      body: {
        name: 'mock name!!',
        cpf: 'mock cpf!!!',
      },
    };
    this.resMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should call the next function with the correct error if the usecase fails', async () => {
    const mockError = new Error('mock error!!!');
    this.validateUsecaseStub.mockImplementation(() => {
      throw mockError;
    });

    await sut.createBatatinha(this.reqMock, this.resMock, this.nextMock);

    expect(this.nextMock).toHaveBeenCalledTimes(1);
    expect(this.nextMock).toHaveBeenCalledWith(mockError);
  });
  it('Should call the batatinha validation usecase correctly', async () => {
    await sut.createBatatinha(this.reqMock, this.resMock, this.nextMock);

    expect(this.validateUsecaseStub).toHaveBeenCalledTimes(1);
    expect(this.validateUsecaseStub).toHaveBeenCalledWith(
      this.reqMock.body,
    );
  });
  it('Should call the next function with the correct error if the repository fails', async () => {
    const mockError = new Error('mock error!!!');
    this.batatinhaCreateStub.mockImplementation(() => {
      throw mockError;
    });

    await sut.createBatatinha(this.reqMock, this.resMock, this.nextMock);

    expect(this.nextMock).toHaveBeenCalledTimes(1);
    expect(this.nextMock).toHaveBeenCalledWith(mockError);
  });
  it('Should call the repository correctly', async () => {
    await sut.createBatatinha(this.reqMock, this.resMock, this.nextMock);

    expect(this.batatinhaCreateStub).toHaveBeenCalledTimes(1);
    expect(this.batatinhaCreateStub).toHaveBeenCalledWith(
      this.reqMock.body.name,
      this.reqMock.body.cpf,
    );
  });
  it('Should return a status 200 with the created batatinha when the request succeeds', async () => {
    const batatinhaMock = { mock: true };
    this.batatinhaCreateStub.mockReturnValue(batatinhaMock);

    await sut.createBatatinha(this.reqMock, this.resMock, this.nextMock);

    expect(this.resMock.status).toHaveBeenCalledWith(200);
    expect(this.resMock.json).toHaveBeenCalledWith(batatinhaMock);
  });
});
