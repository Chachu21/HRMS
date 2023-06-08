const express = require("express");
const {
  getAllResults,
  getResultById,
  createResult,
  updateResultById,
  deleteResultById,
  getResultsByApplicantId,
} = require("../controllers/resultController");

const resultRouter = express.Router();
resultRouter.post('/',createResult);
resultRouter.get("/", getAllResults);
resultRouter.get("/:id", getResultById);
resultRouter.get("/result/:id", getResultsByApplicantId);
resultRouter.put("/update/:id", updateResultById);
resultRouter.delete("/delete/:id", deleteResultById);
module.exports=resultRouter;