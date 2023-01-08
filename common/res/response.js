module.exports = function Response(res, success, result) {
  return res.status(200).json({
    success,
    result,
  });
};
