module.exports = (function constants() {
  const httpStatusCodes = {
    badRequest: 400,
    forbidden: 403,
    notFount: 404
  };

  return {
    httpStatusCodes: httpStatusCodes
  }
})();