import express, { Application } from "express";
import cors from "cors";
import router from "./Router/TaskRouter";

async function appConfig(app: Application) {
  app.use(express.json()).use(cors()).use("/api/v1/task", router);
}

export default appConfig;
