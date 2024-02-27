const express = require("express");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use('/status', function (req, res){
    res.status(200).send("Server is up and running");
})

const PORT = 4000;

app.listen(PORT, () => console.log(`App is running on ${PORT}...`));
