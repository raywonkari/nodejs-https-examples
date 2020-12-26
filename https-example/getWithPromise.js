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

console.log("Capturing the response using .then and .catch");
getRequest()
  .then((data) => {
    console.log(data);
    // further processing
  })
  .catch((error) => {
    console.log(error);
    // handling errors
  });

(async () => {
  let dataResponse = await getRequest();

  console.log("Capturing response using await");
  console.log(dataResponse);
})();

async function getRequest() {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        resolve(body);
      });
    });

    req.on("error", (e) => {
      reject(e);
    });

    req.end();
  });
}
