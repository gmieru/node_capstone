// routes/categories.js
const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// 카테고리 생성
router.post("/", categoryController.createCategory);

// 모든 카테고리 조회
router.get("/", categoryController.getAllCategories);

// 특정 카테고리 조회
router.get("/:id", categoryController.getCategoryById);

// 카테고리 업데이트
router.put("/:id", categoryController.updateCategory);

// 카테고리 삭제
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
