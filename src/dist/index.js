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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envVariables_1 = require("./Config/envVariables");
const Database_1 = __importDefault(require("./Config/Database"));
const app_1 = __importDefault(require("./app"));
const parsePort = parseInt(envVariables_1.envVariables.PORT);
const port = parsePort;
const app = (0, express_1.default)();
const server = app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("");
    yield (0, Database_1.default)();
    console.log("");
    (0, app_1.default)(app);
    console.log(`Server is listening to port: ${port}`);
}));
process.on("uncaughtException", (error) => {
    console.log("Server is shutting down because of uncaught exception");
    console.log("uncaught Exception: ", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("Server is shutting down because of unhandled rejection");
    console.log("unhandled rejection", reason);
    server.close(() => {
        process.exit(1);
    });
});
