// import node modules
import express from "express";

// import api
import { getUser, createUser } from "../api/user.api.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/zaptic", (req, res) => {
  res.render("pages/zaptic");
});


router.get("/api/v1/users/:id", getUser);

router.post('/api/v1/users', createUser)

router.get("/*", (req, res) => {
  res.render("pages/404");
});

export default router;