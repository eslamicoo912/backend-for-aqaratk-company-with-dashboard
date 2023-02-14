import mongoose from "mongoose";

const Project = mongoose.Schema({
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  address: {
    type: String,
  },
  area: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const ProjectModel = mongoose.model("ProjectModel", Project);

export default ProjectModel;
