"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getOneTask = exports.readTask = exports.createTask = exports.defaultGet = void 0;
const TaskModel_1 = require("../Model/TaskModel");
const defaultGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            message: "You have just hit on a task api endpoint",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Cannot hit on this",
            data: error.message
        });
    }
});
exports.defaultGet = defaultGet;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const toCreate = new TaskModel_1.TaskModel({
            task,
            priority,
        });
        const NewTask = yield toCreate.save();
        // const toCreate = await TaskModel.create({
        //     task, priority
        // })
        return res.status(201).json({
            message: "Task is successfully created",
            data: NewTask,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Task cannot be created",
            data: error,
        });
    }
});
exports.createTask = createTask;
const readTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const viewTask = yield TaskModel_1.TaskModel.find();
        return res.status(200).json({
            message: "Task viewed successfully",
            data: viewTask,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Task cannot be viewed",
            data: error,
        });
    }
});
exports.readTask = readTask;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const singleTask = yield TaskModel_1.TaskModel.findById(id);
        return res.status(200).json({
            message: "Single Task successfully seen",
            data: singleTask,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Single Task view unsuccessful",
            data: error,
        });
    }
});
exports.getOneTask = getOneTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const taskUpdates = yield TaskModel_1.TaskModel.findByIdAndUpdate(id, {
            isComplete: true,
        }, { new: true });
        return res.status(201).json({
            message: "Updated Task successfully",
            data: taskUpdates,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Unable to update task",
            data: error,
        });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const extinct = yield TaskModel_1.TaskModel.findByIdAndDelete(id);
        return res.status(201).json({
            message: "Deleted Task successfully",
            data: extinct,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Unable to delete Tasks",
            data: error,
        });
    }
});
exports.deleteTask = deleteTask;
