
function errorHandler(error, req, res, next) {
  console.log(`[ERROR] Falhou muito louco ${error.message}`);

  res.status(500).json({
    reason: error.message,
  });
}

module.exports = errorHandler;