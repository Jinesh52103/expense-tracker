const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const expenseRoutes = require("./routes/expenseRoutes");
const incomeRoutes = require("./routes/incomeRoutes");


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());
app.use("/expenses", expenseRoutes);
app.use("/income", incomeRoutes);



const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Api is working")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))