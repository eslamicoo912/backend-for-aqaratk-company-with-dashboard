import ProjectModel from "../models/project.model.js";

export const createProject = async (req, res) => {
  try {
    const project = new ProjectModel(req.body);
    project.save();
    res.json(project);
  } catch (error) {
    console.log(error);
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.json(projects);
  } catch (error) {
    console.log(error);
  }
};

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await ProjectModel.findById(id);
    res.json(project);
  } catch (error) {
    console.log(error);
  }
};

export const getProjectsByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const projects = await ProjectModel.find({ title: title });
    res.json(projects);
  } catch (error) {
    console.log(error);
  }
};

export const getProjectsBySearch = async (req, res) => {
  const { category, area } = req.params;
  try {
    await ProjectModel.find(
      {
        category: category,
        area: area,
      },
      (err, projects) => {
        if (err) console.log(err);
        else {
          res.json(projects);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryProjects = async (req, res) => {
  const { category } = req.params;
  try {
    const projects = await ProjectModel.find();
    const categoryProjects = projects.filter(
      (project) => project.category === category
    );
    res.json(categoryProjects);
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = async (req, res) => {
  const id = req.params.id;
  try {
    const project = await ProjectModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(project);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    await ProjectModel.findOneAndDelete({ _id: id });
    res.json({
      status: 200,
      message: `project ${id} deleted successfully`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllProjects = async (req, res) => {
  try {
    await ProjectModel.deleteMany();
    res.json({ message: "deleted" });
  } catch (error) {
    console.log(error);
  }
};
