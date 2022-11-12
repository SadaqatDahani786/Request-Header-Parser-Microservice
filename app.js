/*
 ** **
 ** ** ** IMPORTS
 ** **
 */
const express = require("express");
const cors = require("cors");

/*
 ** **
 ** ** ** INITS
 ** **
 */
const app = express();
const PORT = 3000;

/*
 ** **
 ** ** ** MIDDLEWARES
 ** **
 */
app.use(express.static("views"));
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

/*
 ** **
 ** ** ** ROUTES
 ** **
 */
/**
 ** =============================================
 ** Route [/]
 ** =============================================
 */
app.get("/", (req, res) => {
  //Send a index.html as response
  res.sendFile(__dirname + "/views/index.html");
});

/**
 ** =============================================
 ** Route [/whoami]
 ** =============================================
 */
app.get("/api/whoami", (req, res) => {
  //1) Get client data from req object
  const ipaddress = req.ip;
  const software = req.header("User-Agent");
  const language = req.header("Accept-Language");

  //2) Send a response
  res.json({ ipaddress, language, software });
});

/*
 ** **
 ** ** ** HTTP SERVER
 ** **
 */
app.listen(PORT, () => {
  console.log(`Servers is running on port:\t[${PORT}]`);
});
