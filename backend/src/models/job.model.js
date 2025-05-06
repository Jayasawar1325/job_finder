import mongoose from 'mongoose'
const jobCategories = [
  "UI/UX Designer",
  "Graphics Designer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Java Developer",
  "Junior QA",
  "React Developer",
  "Product Manager",
  "Data Analyst",
  "Digital Marketing Specialist"
];

const jobTypes = [
  "Full Time",
  "Part Time",
  "Internship",
  "Freelance",
  "Remote",
  "Contract",
  "Temporary",
  "Volunteer",
  "Hybrid"
];

const jobSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: jobCategories,
    required: true,
  },

    companyName: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
    },
  location: {
    type: String,
    required: true,
  },
  daysLeft: {
    type: Number,
    required: true,
  },
  jobType: {
    type: String,
    enum: jobTypes,
    required: true,
  },
});

export const Job = mongoose.model('Job',jobSchema)
