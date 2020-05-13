module.exports.handler = async (event) => {
  const request = require("./request");
  const bodyCreator = require("./body");
  const body = {
    ...bodyCreator(event),
    status: "050",
  };
  request(body);
  return;
};
