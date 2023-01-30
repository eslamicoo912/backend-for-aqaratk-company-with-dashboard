import { Router } from "express";
import { loginAsAdmin } from "../controllers/admin.controller.js";

const routes = Router();

routes.post("/admin", loginAsAdmin);

export default routes;
