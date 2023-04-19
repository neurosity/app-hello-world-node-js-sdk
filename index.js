//const { Notion } = require("@neurosity/notion");
const { Neurosity } = require("@neurosity/sdk");
require('dotenv').config();

const deviceId = process.env.DEVICE_ID || "";
const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";

const verifyEnvs = (email, password, deviceId) => {
  const invalidEnv = (env) => {
    return (env === "");
  }
  if (invalidEnv(email) || invalidEnv(password) || invalidEnv(deviceId)) {
      console.error("Please verify deviceId, email and password are in .env file, quitting...");
      process.exit(0);
  }
}
verifyEnvs(email, password, deviceId);
console.log(`${email} attempting to authenticate with ${deviceId}`);

//const notion = new Notion({
const neurosity = new Neurosity({  
  deviceId
});

const main = async () => {
//  await notion.login({
    await neurosity.login({
    email,
    password
  })
  .catch(error => {
    console.log(error);
    throw new Error(error);
  });
  console.log("Logged in");

//  notion.calm().subscribe((calm) => {
  neurosity.calm().subscribe((calm) => {
    if (calm.probability > 0.3) {
      console.log("Hello world");
    }
  });
}

main();
