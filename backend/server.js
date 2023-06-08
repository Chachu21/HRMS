require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const employeeRequisitionRouter = require("./routes/employeeRequistionRoute");
const applicantRouter = require("./routes/applicantRoute");
const { staffRouter } = require("./routes/staffRoute");
const { loginRouter } = require("./routes/loginRoute");
const roleRouter = require("./routes/roleRoute");
const permissonRouter = require("./routes/permissionRoute");
const vacancyRouter = require("./routes/vacancyRoute");

const leaveRouter = require("./routes/leaveRoute");

const scheduleRouter = require("./routes/scheduleRoute");
const jobRankRouter = require("./routes/jobRankRoute");
const applicantListRouter = require("./routes/applicantListRoute");
const manageEmployeAccountRoute = require("./routes/manageEmployeAccountRoute");// const manageEmployeAccountRoute = require("./routes/manageEmployeAccountRoute");
const app = express();
const port = process.env.PORT || 5002;
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//route
app.use("/api/v1/applicant", applicantRouter);
app.use("/api/v1/staff", staffRouter);
app.use("/api/v1", loginRouter);
app.use("/api/v1", roleRouter);
app.use("/api/v1/leave_request", leaveRouter);
app.use("/api/v1/employee_requistion", employeeRequisitionRouter);
app.use("/api/v1/permission", permissonRouter);
app.use("/api/v1/vacancy", vacancyRouter);
app.use("/api/v1/schedule", scheduleRouter);
app.use("/api/v1/job_rank", jobRankRouter);
app.use("/api/v1/lists", applicantListRouter);
app.use("/api/v1/data", manageEmployeAccountRoute);


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
