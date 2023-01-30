import { Router } from "express";
import * as controllers from "../controllers/message.controller.js";

const routes = Router();

routes.post("/", controllers.createMessage);
routes.get("/", controllers.getMessages);
routes.patch("/:id", controllers.updateMessage);
routes.delete("/:id", controllers.deleteMessage);

export default routes;
