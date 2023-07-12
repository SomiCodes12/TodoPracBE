import express, { Application } from "express";
import { envVariables } from "./Config/envVariables";
import dbConfig from "./Config/Database";
import appConfig from "./app";

const parsePort: number = parseInt(envVariables.PORT);
const port: number = parsePort;

const app: Application = express();
const server = app.listen(port, async () => {
  console.log("");
  await dbConfig();
  console.log("");
  appConfig(app);
  console.log(`Server is listening to port: ${port}`);
});

process.on("uncaughtException", (error: any) => {
  console.log("Server is shutting down because of uncaught exception");
  console.log("uncaught Exception: ", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Server is shutting down because of unhandled rejection");
  console.log("unhandled rejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
