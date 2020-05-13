module.exports.handler = async (event) => {
  const request = require("./request");
  const bodyCreator = require("./body");
  const body = {
    ...bodyCreator(event),
    status: event.data.task_type === "pickup" ? "300" : "400",
    recipientSignatureUrl: event.data.pod_url,
  };
  request(body)
  return;
};
