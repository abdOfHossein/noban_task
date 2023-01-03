module.exports = function Response(res, success, result) {
  return res.json({
    success,
    result,
  });
};
