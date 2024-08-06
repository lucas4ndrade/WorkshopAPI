
function errorHandler(error, req, res, next) {
  console.log(`[ERROR] Falhou muito louco ${error.message}`);

  const status = error.status || 500;
  const reason = error.message || 'Unknown error';

  res.status(status).json({
    reason,
  });
}

module.exports = errorHandler;