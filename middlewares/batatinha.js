function batatinhaMiddleware(req, res, next) {
  console.log("BATATINHA");

  next();
}

module.exports = {
  batatinhaMiddleware,
};
