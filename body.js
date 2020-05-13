const body = (event) => {
  return {
    package_id: event.data.order_item.external_customer_id2,
    tracking_number: event.data.order_item.external_customer_id,
    timestamp: event.created_at,
    comments: "",
  };
};
module.exports = body;
