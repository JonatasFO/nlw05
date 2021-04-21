import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

// settings
routes.post("/settings", settingsController.create);

// users
routes.post("/users", usersController.create);

// messages
routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes };