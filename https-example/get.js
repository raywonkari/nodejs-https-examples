const https = require("https");

const options = {
  hostname: "api.github.com",
  path: "/users/raywonkari",
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "raywon-nodejs-example-app",
  },
};

const req = https.request(options, (res) => {
  console.log("statusCode:", res.statusCode);
  console.log("headers:", res.headers);

  res.on("data", (d) => {
    console.log(d.toString());
  });
});

req.on("error", (e) => {
  console.error(e);
});
req.end();
