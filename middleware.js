const VALID_KEYS_PATH = __dirname + "/valid-keys.txt";
const fs = require("fs");

module.exports = function (req, res, next) {
  /**
   * Check for x-api-key in header
   */

  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res
      .status(401)
      .json({ message: "Please provide API KEY in header" });
  }

  /**
   * Check if API key is valid
   */

  const buffer = fs.readFileSync(VALID_KEYS_PATH);
  const keys = buffer.toString();

  if (!keys.includes(apiKey)) {
    return res.status(401).json({ message: "API KEY is invalid" });
  }

  return next();
};
