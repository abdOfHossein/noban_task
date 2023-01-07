module.exports = function Err(res, code, message) {
  return res.json({
    code,
    message,
  });
};
