require('dotenv').config();

const { Notion } = require("@neurosity/notion");

main();

async function main() {
  const deviceId = process.env.DEVICE_ID;
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  console.log(deviceId, email, password);

  const notion = new Notion({
    deviceId
  });

  await notion.login({
    email,
    password
  })
  .catch(error => {
    console.log("error", error);
  });
  console.log("logged in!");

  await notion.logout()
  .catch(error => {
    console.log("error", error);
  });
  console.log("logged out!");
}