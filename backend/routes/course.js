const router = require("express").Router();
const Course = require("../models/Course");

router.get("/", async (req, res) => {
  const result = await Course.find();
  res.json({ status: true, info: result });
});

router.post("/", async (req, res) => {
  try {
    const newCourse = await new Course({
      course: req.body.course,
      plan: req.body.plan,
      timestudy: req.body.timestudy,
      date: req.body.date,
      year: req.body.year,
      round: req.body.round,
      project: req.body.project,
      faculty: req.body.faculty,
      faculty2: req.body.faculty2,
      etc: req.body.etc,
    });

    const New_Beds = await newCourse.save();
    res.json({ status: true, message: "สำเร็จ!", info: New_Beds });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "เกิดข้อผิดพลาดกรุณาลงทะเบียนอีกครั้งภายหลัง",
    });
  }
});

exports.router = router;
