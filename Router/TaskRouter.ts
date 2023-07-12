import { Router } from "express";
import {
  // defaultGet,
  createTask,
  deleteTask,
  getOneTask,
  readTask,
  updateTask,
} from "../Controller/TaskController";

const router= Router();



// router.get("/all", readTask)
// router.get("/:id", getOneTask);
// router.patch("/:id", updateTask)
// router.delete("/:id", deleteTask)
// router.post("/create", createTask);

// router.route("/").get(defaultGet)
router.route("/all").get(readTask)
router.route("/:id").get(getOneTask)
router.route("/create").post(createTask)
router.route("/:id").patch(updateTask)
router.route("/:id").delete(deleteTask)

export default router;
