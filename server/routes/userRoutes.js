import express from "express";
import {
  getUsers,
  addUser,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controllers/userCtrl.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/read/:id", getSingleUser);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/update/:id", updateUser);

export default router;
