module.exports = (function constants() {
  const httpStatusCodes = {
    badRequest: 400,
    forbidden: 403,
    notFound: 404
  };

  return {
    httpStatusCodes: httpStatusCodes
  }
})();