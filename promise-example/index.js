successfulPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

failedPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

async function successfulPromise() {
  let testVar = "This is a Successful Promise";
  return new Promise((resolve, reject) => {
    if (testVar == "This is a Successful Promise") {
      resolve(testVar);
    } else {
      reject("Failed condition");
    }
  });
}

async function failedPromise() {
    let testVar = "This is a Successful Promise";
  return new Promise((resolve, reject) => {
    if (testVar != "This is a Successful Promise") {
      resolve(testVar);
    } else {
      reject("This is a Rejected Promise");
    }
  });
}
