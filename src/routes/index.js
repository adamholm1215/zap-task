// import node modules
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/zaptic", (req, res) => {
  res.render("pages/zaptic");
});

router.get("/*", (req, res) => {
  res.render("pages/404");
});

export default router;