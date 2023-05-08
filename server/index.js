import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/Auth.js";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import hotelsRoute from "./routes/hotels.js";
// import roomsRoute from "./routes/rooms.js";
// import usersRoute from "./routes/users.js";
import cors from "cors";
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const reqconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log("coonected to database!");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("database is disconnected");
});
//middlewares

app.use(cookieParser());
app.use(cors());//instead of proxy you can
app.use(express.json());
app.use(express.static('public'));
app.use("/api/auth", authRoute);
// app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);
// app.use("/api/users", usersRoute);
// error handling using middlewares
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somthing went wrong";
  return res.status(errorStatus).send({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client/build/index"));

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);



app.listen(PORT, () => {
  reqconnection();
  console.log(`app is listening on port no ${PORT}`);
});
