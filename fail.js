const status = (reason) => {
  if ("package lost".indexOf(reason) !== -1) {
    return "500";
  } else if ("package damaged".indexOf(reason) !== -1) {
    return "600";
  } else {
    return "100";
  }
};
module.exports.handler = async (event) => {
  const request = require("./request");
  const bodyCreator = require("./body");
  const body = {
    ...bodyCreator(event),
    status: status(event.data.reason),
  };
  request(body);
  return;
};
