const express = require("express");

const {
  applyLeave,
  getMyLeaves,
  getPendingLeaves,
  approveLeave,
  rejectLeave,
  getApprovedLeaves,
  getRejectedLeaves,
} = require("../controller/leaveController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/", protect, applyLeave);

router.get("/my", protect, getMyLeaves);



router.get("/pending", protect, adminOnly, getPendingLeaves);

router.get("/approved", protect, adminOnly, getApprovedLeaves);

router.get("/rejected", protect, adminOnly, getRejectedLeaves);

router.put("/approve/:id", protect, adminOnly, approveLeave);

router.put("/reject/:id", protect, adminOnly, rejectLeave);

module.exports = router;