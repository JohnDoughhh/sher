const { Client } = require("mpp-client-net");

const client = new Client("wss://mppclone.com", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMzcyNjAzYmQ4ZTFkYWQ0ZGMyMGU2NzYiLCJpYXQiOjE3NjI5MDgyMTUsImlzcyI6ImlwQG1wcGNsb25lLmNvbSJ9.0t3j_G41HcxbVOu8Sr6mnMRljmPIdGJ40CAnxRO4zgA");

client.start();
client.setChannel("sher");

client.on("hi", (msg) => {
  client.sendArray([{ m: "userset", set: { name: "[BOT] sher", color: "#adbaff" } }]);
  client.sendArray([{ m: "a", message: "``sher bot is online!``" }]);
}
