'use strict';

const test = async (req, res, next) => {
  try {
    // console.log("Browser/tab closed");
    res.send('api is running');
  } catch (e) {
    res.status(400).send(e.message);
  }
};
const test2 = async (req, res, next) => {
  try {
    // console.log("Browser/tab closed");
    res.send('api is running for test2');
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  test, test2
};
