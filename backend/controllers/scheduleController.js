const initialModels = require("../models/init-models");
const sequelize = require("../config/database");
const models = initialModels(sequelize);
const Schedule = models.schedule;

//create schedule

const CreateShedule = async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllSchedule = async (req, res) => {
  try {
    const allschedule = await Schedule.findAll();
    res.status(200).json(allschedule);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateShedule = async () => {
  const id = req.params.id;
  try {
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ error: "schedule not found" });
    }
    await schedule.update(req.body);
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteSchedule = async () => {
  const id = req.params.id;
  try {
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ error: "schedule not found" });
    }
    await Schedule.destroy();
    res.status(200).json("shedule is successfuly deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports ={
  CreateShedule,
  getAllSchedule,
  updateShedule,
  deleteSchedule
}