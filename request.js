const request = async (data) => {
  const http = require("http");
  const url = "http://ec2-3-15-194-114.us-east-2.compute.amazonaws.com:14000/";
  const options = {
    protocol: 'http:',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const req = http.request(url,options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (response) => {
      process.stdout.write(response);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(JSON.stringify(data));
  req.end();
};
module.exports = request;
