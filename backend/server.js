require("dotenv").config();
const  express =require("express");
const cors =require("cors")
const applicantRouter = require("./routes/applicantRoute");
const { staffRouter } = require("./routes/staffRoute");
const { loginRouter } = require("./routes/loginRoute");
const app = express();
const port = process.env.PORT || 5002;
app.use(express.json())
app.use(cors())
//route
<<<<<<< HEAD
app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(port, () => {
  console.log("server is running");
});
=======
app.use('/api/v1/applicant', applicantRouter)
app.use("/api/v1/staff", staffRouter);
app.use("/api/v1", loginRouter);


  app.listen(port, 
  () =>{
  console.log("server is running on port 5002")
    })
>>>>>>> 1d05c84795fe7ea242bd36d910a351ff65b7735e
