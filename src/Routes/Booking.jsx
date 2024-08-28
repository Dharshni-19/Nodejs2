import express from "express";
import HomeController from "../controller/Home.jsx";
import BookingRoutes from "./Home.js";

let router = express.Router();

router.get("/", HomeController.homePage);
router.use("/hall-booking", BookingRoutes);

export default router;