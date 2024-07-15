import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  console.log("hello");
});

export default router