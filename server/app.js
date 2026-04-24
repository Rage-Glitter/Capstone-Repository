// "Import" the Express module instead of http
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import birthInfos from "./controllers/birthInfos.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
// Initialize the Express application
const app = express();

const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

app.use(cors()); //cross origin scripting - helps in terms of how our data is being sent and transmitted.
app.use(express.json()); //javascript object notation, helps decode some of the script
app.use(logging);

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

app.use("/birthInfo", birthInfos);

// Handle the request with HTTP GET method from http://localhost:3000/
app.get("/", (request, response) => {
  response.send("Welcome to my capstoned!");
});

// Handle the request with HTTP GET method from http://localhost:3000/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

// http://localhost:3000/echo/matt
// http://localhost:3000/echo/fred?flip=1
app.get("/echo/:text", (request, response) => {
  let output = request.params.text;
  if ("flip" in request.query && request.query.flip === "1") {
    output = output
      .split("")
      .reverse()
      .join("");
  }
  if (`lastName` in request.query) {
    output += ` ${request.query.lastName}`;
  }
  response.status(418).send(`You told me to echo ${output}`);
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 3000
const server = app.listen(PORT, () =>
  console.log(`Listening on port ${server.address().port}`)
);
