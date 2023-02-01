// import node modules
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/zaptic", (req, res) => {
  res.render("pages/zaptic");
});

export default router;