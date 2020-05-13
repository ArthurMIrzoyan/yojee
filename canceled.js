module.exports.handler = async (event) => {
  const request = require("./request");
  const body = {
    package_id: event.external_customer_id2,
    tracking_number: event.external_customer_id,
    timestamp: event.created_at,
    comments: "",
    status: "200",
  };
  request(body)
  return;
};
