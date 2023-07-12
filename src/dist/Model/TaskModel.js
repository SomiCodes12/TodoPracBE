"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    task: {
        type: String,
        trim: true,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
    },
}, { timestamps: true });
exports.TaskModel = (0, mongoose_1.model)("Productivity Tool", TaskSchema);
