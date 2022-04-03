const VALID_KEYS_PATH = __dirname + "/valid-keys.txt";
const fs = require("fs");
const shortid = require("shortid");
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require("os").EOL;

module.exports = function (req, res) {
  /**
   * Generating api key
   */
  const apiKey = `${shortid.generate()}`;

  /**
   * Store api key in file
   */
  fs.appendFileSync(VALID_KEYS_PATH, `${apiKey}${LINE_ENDING}`);

  /**
   * Set header and return response
   */
  return res.status(201).json({ apiKey });
};
