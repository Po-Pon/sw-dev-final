const mongoose = require("mongoose");

const CourseSchama = new mongoose.Schema(
  {
    course: {
      type: String,
    },
    plan: {
      type: String,
    },
    timestudy: {
      type: String,
    },
    date: {
      type: String,
    },
    year: {
      type: String,
    },
    round: {
      type: String,
    },
    project: {
      type: String,
    },
    faculty:{
      type: String,
    },
    faculty2: {
      type: String
    },
    etc:{
      type: String
    }
  }
);

module.exports = mongoose.model("Course", CourseSchama);
