import MessageModel from "../models/message.model.js";

export const createMessage = async (req, res) => {
  try {
    const message = new MessageModel(req.body);
    message.save();
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find();
    res.json(messages);
  } catch (error) {
    console.log(error);
  }
};

export const updateMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMessage = await MessageModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { upsert: true, new: true }
    );
    res.json(updatedMessage);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    await MessageModel.findByIdAndDelete(id);
    res.json({
      status: 200,
      message: `${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
