module.exports = function Response(res, success, result) {
  return res.statusCode(200).json({
    success,
    result,
  });
};
