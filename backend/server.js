require("dotenv").config();
const express = require("express");
const cors = require("cors");
const applicantRouter = require("./routes/applicantRoute");
const { staffRouter } = require("./routes/staffRoute");
const { loginRouter } = require("./routes/loginRoute");
const roleRouter = require("./routes/roleRoute");
const permissonRouter = require("./routes/permissionRoute");
const vacancyRouter = require("./routes/vacancyRoute");
const leaveRouter = require("./routes/leaveRoute");
const scheduleRouter = require("./routes/scheduleRoute");
const jobRankRouter = require("./routes/jobRankRoute");
const app = express();
const port = process.env.PORT || 5002;
app.use(express.json());
app.use(cors());
//route
app.use("/api/v1/applicant", applicantRouter);
app.use("/api/v1/staff", staffRouter);
app.use("/api/v1", loginRouter);
app.use("/api/v1", roleRouter);
app.use("/api/v1/leave", leaveRouter);
app.use("/api/v1/permission", permissonRouter);
app.use("/api/v1/vacancy", vacancyRouter);
app.use("/api/v1/schedule", scheduleRouter);
app.use("/api/v1/jobRank", jobRankRouter);
app.use("/api/v1/lists", applicantRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
