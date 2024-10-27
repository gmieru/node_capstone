// routes/userRoutes.js
const express = require("express");
const { createUser, getUser, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

// 사용자 생성
router.post("/", createUser);

// 사용자 조회
router.get("/:id", getUser);

// 사용자 수정
router.put("/:id", updateUser);

// 사용자 삭제
router.delete("/:id", deleteUser);

module.exports = router;
