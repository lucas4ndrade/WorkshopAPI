
function errorHandler(error, req, res, next) {
  console.log(`[ERROR] Falhou muito louco ${error.message}`);

  let status = 500;
  let reason = 'Unknown error';
  if (error instanceof HttpError) {
    status = error.status;
    reason = error.message;
  }

  res.status(status).json({
    reason,
  });
}

module.exports = errorHandler;