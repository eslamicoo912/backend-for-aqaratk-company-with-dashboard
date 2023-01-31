import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import ProjectRoutes from "./routes/project.routes.js";
import MessageRoutes from "./routes/messgae.routes.js";
import AdminRoutes from "./routes/admin.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("Aqaratk");
});
app.use("/projects", ProjectRoutes);
app.use("/messages", MessageRoutes);
app.use("/login", AdminRoutes);

// database connection
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening for port ${port}`);
    });
  })
  .catch((err) => console.log(err));
