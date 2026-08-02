const Leave = require("../models/Leave");


const applyLeave = async (req, res) => {
  try {
    const { leaveType, fromDate, toDate, reason } = req.body;

    const leave = await Leave.create({
      employee: req.user.id,
      leaveType,
      fromDate,
      toDate,
      reason,
    });

    res.status(201).json({
      message: "Leave applied successfully",
      leave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getMyLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({
      employee: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getPendingLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({
      status: "pending",
    })
      .populate("employee", "name email")
      .sort({ createdAt: -1 });

    res.json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const approveLeave = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    res.json({
      message: "Leave approved",
      leave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const rejectLeave = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    res.json({
      message: "Leave rejected",
      leave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getApprovedLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({
      status: "approved",
    }).populate("employee", "name email");

    res.json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getRejectedLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({
      status: "rejected",
    }).populate("employee", "name email");

    res.json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  applyLeave,
  getMyLeaves,
  getPendingLeaves,
  approveLeave,
  rejectLeave,
  getApprovedLeaves,
  getRejectedLeaves,
};