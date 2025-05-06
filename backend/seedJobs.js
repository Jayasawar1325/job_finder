/* eslint-disable no-undef */
import mongoose from "mongoose";
import { Job } from "./src/models/job.model.js";
const MONGODB_URI =
  "mongodb+srv://rautjayasawar1325:job_finder@cluster0.gmtckpo.mongodb.net";
const jobs = [
  {
    category: "Frontend Developer",
    companyName: "TechNepal",
    companyLogo: "https://example.com/logo1.png",
    location: "Kathmandu",
    daysLeft: 7,
    jobType: "Full Time",
  },
  {
    category: "UI/UX Designer",
    companyName: "DesignHub",
    companyLogo: "https://example.com/logo2.png",
    location: "Pokhara",
    daysLeft: 5,
    jobType: "Freelance",
  },
  {
    category: "Backend Developer",
    companyName: "NepalCode",
    companyLogo: "https://example.com/logo3.png",
    location: "Lalitpur",
    daysLeft: 3,
    jobType: "Internship",
  },
  {
    category: "React Developer",
    companyName: "NepalTech",
    companyLogo: "https://example.com/logo4.png",
    location: "Kathmandu",
    daysLeft: 12,
    jobType: "Remote",
  },
  {
    category: "Full Stack Developer",
    companyName: "InnovateNepal",
    companyLogo: "https://example.com/logo5.png",
    location: "Biratnagar",
    daysLeft: 10,
    jobType: "Full Time",
  },
  {
    category: "Graphics Designer",
    companyName: "NepalCreative",
    companyLogo: "https://example.com/logo6.png",
    location: "Kathmandu",
    daysLeft: 8,
    jobType: "Part Time",
  },
  {
    category: "Java Developer",
    companyName: "CodeNepal",
    companyLogo: "https://example.com/logo7.png",
    location: "Pokhara",
    daysLeft: 14,
    jobType: "Freelance",
  },
  {
    category: "Data Analyst",
    companyName: "DataNepal",
    companyLogo: "https://example.com/logo8.png",
    location: "Kathmandu",
    daysLeft: 15,
    jobType: "Remote",
  },
  {
    category: "Digital Marketing Specialist",
    companyName: "NepalMarket",
    companyLogo: "https://example.com/logo9.png",
    location: "Lalitpur",
    daysLeft: 6,
    jobType: "Contract",
  },
  {
    category: "Junior QA",
    companyName: "NepalTesting",
    companyLogo: "https://example.com/logo10.png",
    location: "Kathmandu",
    daysLeft: 20,
    jobType: "Internship",
  },
  {
    category: "Product Manager",
    companyName: "ProductNepal",
    companyLogo: "https://example.com/logo11.png",
    location: "Pokhara",
    daysLeft: 7,
    jobType: "Full Time",
  },
  {
    category: "UI/UX Designer",
    companyName: "NepalDesigners",
    companyLogo: "https://example.com/logo12.png",
    location: "Kathmandu",
    daysLeft: 4,
    jobType: "Freelance",
  },
  {
    category: "React Developer",
    companyName: "ReactNepal",
    companyLogo: "https://example.com/logo13.png",
    location: "Kathmandu",
    daysLeft: 6,
    jobType: "Freelance",
  },
  {
    category: "Backend Developer",
    companyName: "ByteNepal",
    companyLogo: "https://example.com/logo14.png",
    location: "Lalitpur",
    daysLeft: 9,
    jobType: "Full Time",
  },
  {
    category: "Frontend Developer",
    companyName: "CodeNepal",
    companyLogo: "https://example.com/logo15.png",
    location: "Kathmandu",
    daysLeft: 11,
    jobType: "Contract",
  },
  {
    category: "Junior QA",
    companyName: "TestNepal",
    companyLogo: "https://example.com/logo16.png",
    location: "Pokhara",
    daysLeft: 13,
    jobType: "Full Time",
  },
  {
    category: "Full Stack Developer",
    companyName: "NepalStack",
    companyLogo: "https://example.com/logo17.png",
    location: "Biratnagar",
    daysLeft: 17,
    jobType: "Freelance",
  },
  {
    category: "Data Analyst",
    companyName: "NepalData",
    companyLogo: "https://example.com/logo18.png",
    location: "Kathmandu",
    daysLeft: 5,
    jobType: "Internship",
  },
  {
    category: "Java Developer",
    companyName: "JavaNepal",
    companyLogo: "https://example.com/logo19.png",
    location: "Kathmandu",
    daysLeft: 18,
    jobType: "Full Time",
  },
  {
    category: "Graphics Designer",
    companyName: "PixelNepal",
    companyLogo: "https://example.com/logo20.png",
    location: "Pokhara",
    daysLeft: 8,
    jobType: "Part Time",
  },
  {
    category: "UI/UX Designer",
    companyName: "PixelCraft",
    companyLogo: "https://example.com/logo1.png",
    location: "Kathmandu",
    daysLeft: 10,
    jobType: "Remote"
  },
  {
    category: "Frontend Developer",
    companyName: "CodeNest",
    companyLogo: "https://example.com/logo2.png",
    location: "Lalitpur",
    daysLeft: 12,
    jobType: "Full Time"
  },
  {
    category: "Graphics Designer",
    companyName: "DesignHive",
    companyLogo: "https://example.com/logo3.png",
    location: "Pokhara",
    daysLeft: 7,
    jobType: "Part Time"
  },
  {
    category: "Backend Developer",
    companyName: "APINepal",
    companyLogo: "https://example.com/logo4.png",
    location: "Biratnagar",
    daysLeft: 5,
    jobType: "Contract"
  },
  {
    category: "Full Stack Developer",
    companyName: "StackLab",
    companyLogo: "https://example.com/logo5.png",
    location: "Kathmandu",
    daysLeft: 14,
    jobType: "Hybrid"
  },
  {
    category: "Java Developer",
    companyName: "SpringTech",
    companyLogo: "https://example.com/logo6.png",
    location: "Lalitpur",
    daysLeft: 9,
    jobType: "Remote"
  },
  {
    category: "Junior QA",
    companyName: "QANepal",
    companyLogo: "https://example.com/logo7.png",
    location: "Pokhara",
    daysLeft: 6,
    jobType: "Internship"
  },
  {
    category: "React Developer",
    companyName: "Reactify",
    companyLogo: "https://example.com/logo8.png",
    location: "Birgunj",
    daysLeft: 13,
    jobType: "Freelance"
  },
  {
    category: "Product Manager",
    companyName: "ProductPilot",
    companyLogo: "https://example.com/logo9.png",
    location: "Kathmandu",
    daysLeft: 8,
    jobType: "Full Time"
  },
  {
    category: "Data Analyst",
    companyName: "DataNepal",
    companyLogo: "https://example.com/logo10.png",
    location: "Butwal",
    daysLeft: 11,
    jobType: "Remote"
  },
  {
    category: "Digital Marketing Specialist",
    companyName: "MarketMinds",
    companyLogo: "https://example.com/logo11.png",
    location: "Lalitpur",
    daysLeft: 15,
    jobType: "Contract"
  },
  {
    category: "UI/UX Designer",
    companyName: "VisualNest",
    companyLogo: "https://example.com/logo12.png",
    location: "Pokhara",
    daysLeft: 6,
    jobType: "Volunteer"
  },
  {
    category: "React Developer",
    companyName: "ReactNXT",
    companyLogo: "https://example.com/logo13.png",
    location: "Kathmandu",
    daysLeft: 10,
    jobType: "Hybrid"
  },
  {
    category: "Graphics Designer",
    companyName: "ColorPixels",
    companyLogo: "https://example.com/logo14.png",
    location: "Biratnagar",
    daysLeft: 9,
    jobType: "Part Time"
  },
  {
    category: "Full Stack Developer",
    companyName: "TechStream",
    companyLogo: "https://example.com/logo15.png",
    location: "Pokhara",
    daysLeft: 7,
    jobType: "Freelance"
  },
  {
    category: "Frontend Developer",
    companyName: "FrontHub",
    companyLogo: "https://example.com/logo16.png",
    location: "Kathmandu",
    daysLeft: 12,
    jobType: "Full Time"
  },
  {
    category: "Backend Developer",
    companyName: "BackLogic",
    companyLogo: "https://example.com/logo17.png",
    location: "Lalitpur",
    daysLeft: 13,
    jobType: "Temporary"
  },
  {
    category: "Junior QA",
    companyName: "TestNepal",
    companyLogo: "https://example.com/logo18.png",
    location: "Butwal",
    daysLeft: 4,
    jobType: "Internship"
  },
  {
    category: "Product Manager",
    companyName: "ProdManage",
    companyLogo: "https://example.com/logo19.png",
    location: "Kathmandu",
    daysLeft: 6,
    jobType: "Full Time"
  },
  {
    category: "Java Developer",
    companyName: "JavaSprint",
    companyLogo: "https://example.com/logo20.png",
    location: "Pokhara",
    daysLeft: 11,
    jobType: "Contract"
  },
  {
    category: "Digital Marketing Specialist",
    companyName: "ClickForce",
    companyLogo: "https://example.com/logo21.png",
    location: "Lalitpur",
    daysLeft: 7,
    jobType: "Remote"
  },
  {
    category: "Graphics Designer",
    companyName: "DrawLab",
    companyLogo: "https://example.com/logo22.png",
    location: "Birgunj",
    daysLeft: 14,
    jobType: "Volunteer"
  },
  {
    category: "Data Analyst",
    companyName: "InsightAI",
    companyLogo: "https://example.com/logo23.png",
    location: "Kathmandu",
    daysLeft: 5,
    jobType: "Hybrid"
  },
  {
    category: "React Developer",
    companyName: "CodeReact",
    companyLogo: "https://example.com/logo24.png",
    location: "Lalitpur",
    daysLeft: 8,
    jobType: "Full Time"
  },
  {
    category: "Java Developer",
    companyName: "NepJava",
    companyLogo: "https://example.com/logo25.png",
    location: "Pokhara",
    daysLeft: 9,
    jobType: "Freelance"
  },
  {
    category: "UI/UX Designer",
    companyName: "UIStudio",
    companyLogo: "https://example.com/logo26.png",
    location: "Biratnagar",
    daysLeft: 10,
    jobType: "Remote"
  },
  {
    category: "Frontend Developer",
    companyName: "CSSCraft",
    companyLogo: "https://example.com/logo27.png",
    location: "Butwal",
    daysLeft: 6,
    jobType: "Part Time"
  },
  {
    category: "Backend Developer",
    companyName: "LogicTree",
    companyLogo: "https://example.com/logo28.png",
    location: "Lalitpur",
    daysLeft: 7,
    jobType: "Temporary"
  },
  {
    category: "Junior QA",
    companyName: "QAHut",
    companyLogo: "https://example.com/logo29.png",
    location: "Kathmandu",
    daysLeft: 8,
    jobType: "Volunteer"
  },
  {
    category: "Product Manager",
    companyName: "VisionLead",
    companyLogo: "https://example.com/logo30.png",
    location: "Pokhara",
    daysLeft: 13,
    jobType: "Contract"
  }
];

const seedJobs = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    await Job.deleteMany(); 
    await Job.insertMany(jobs);
    console.log("Sample jobs inserted successfully!");
    process.exit(0);
  } catch (error) {
    console.error(" Error inserting jobs:", error);
    process.exit(1);
  }
};

seedJobs();
