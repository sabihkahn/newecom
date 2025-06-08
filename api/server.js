import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import morgan from "morgan";
import cors from "cors";
import usermodel from "../usermodel.js";
import ProductRoutes from "../productroutes.js";

dotenv.config();
connectDB();
//N0T8XlWQLB5VQ1H9wMYTJ2eB
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/Product", ProductRoutes);

app.get("/", (req, res) => {
  res.send("protected route ha na a meri jan");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required", success: false });
    }

    const user = await usermodel.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send({ success: false, message: "Invalid email or password" });
    }

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: "Server error", error: err.message });
  }
});

// ❗ Vercel expects you to export a function or Express instance
export default app;
