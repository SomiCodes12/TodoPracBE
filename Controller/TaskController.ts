import { TaskModel } from "../Model/TaskModel";
import iTask from "../Utils/Interface";
import { Request, Response } from "express";

export const defaultGet = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "You have just hit on a task api endpoint",
    });
  } catch (error:any) {
    return res.status(500).json({
      message: "Cannot hit on this",
      data: error.message
    });
  }
};

export const createTask = async (
  req: Request<{}, {}, iTask>,
  res: Response
) => {
  try {
    const { task, priority } = req.body;
    const toCreate = new TaskModel({
      task,
      priority,
    });
    const NewTask = await toCreate.save();
    // const toCreate = await TaskModel.create({
    //     task, priority
    // })
    return res.status(201).json({
      message: "Task is successfully created",
      data: NewTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Task cannot be created",
      data: error,
    });
  }
};

export const readTask = async (req: Request, res: Response) => {
  try {
    const viewTask = await TaskModel.find();

    return res.status(200).json({
      message: "Task viewed successfully",
      data: viewTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Task cannot be viewed",
      data: error,
    });
  }
};

export const getOneTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const singleTask = await TaskModel.findById(id);

    return res.status(200).json({
      message: "Single Task successfully seen",
      data: singleTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Single Task view unsuccessful",
      data: error,
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const taskUpdates = await TaskModel.findByIdAndUpdate(
      id,
      {
        isComplete: true,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "Updated Task successfully",
      data: taskUpdates,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to update task",
      data: error,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const extinct = await TaskModel.findByIdAndDelete(id);

    return res.status(201).json({
      message: "Deleted Task successfully",
      data: extinct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to delete Tasks",
      data: error,
    });
  }
};
