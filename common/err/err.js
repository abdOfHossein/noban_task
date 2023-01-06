module.exports = function Err(res, statusCode, message) {
  return res.json({
    statusCode,
    message,
  });
};
