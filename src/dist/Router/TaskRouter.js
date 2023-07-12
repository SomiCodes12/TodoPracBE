"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = require("../Controller/TaskController");
const router = (0, express_1.Router)();
// router.get("/all", readTask)
// router.get("/:id", getOneTask);
// router.patch("/:id", updateTask)
// router.delete("/:id", deleteTask)
// router.post("/create", createTask);
// router.route("/").get(defaultGet)
router.route("/all").get(TaskController_1.readTask);
router.route("/:id").get(TaskController_1.getOneTask);
router.route("/create").post(TaskController_1.createTask);
router.route("/:id").patch(TaskController_1.updateTask);
router.route("/:id").delete(TaskController_1.deleteTask);
exports.default = router;
