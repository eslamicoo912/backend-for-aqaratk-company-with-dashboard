import { Router } from "express";
import * as controllers from "../controllers/project.controller.js";

const routes = Router();

routes.post("/", controllers.createProject);
routes.get("/", controllers.getProjects);
routes.get("/id/:id", controllers.getProjectById);
routes.get("/category/:category", controllers.getCategoryProjects);
routes.get("/category_area/:category/:area", controllers.getProjectsBySearch);
routes.get("/projects_title/:title", controllers.getProjectsByTitle);
routes.patch("/:id", controllers.updateProject);
routes.delete("/:id", controllers.deleteProject);
routes.delete("/", controllers.deleteAllProjects);

export default routes;
