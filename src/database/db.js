// src/database.js
const mongoose = require('mongoose');
const cloudDb = process.env.MONGODB_URL

const MONGODB_URI = cloudDb ?? "mongodb://127.0.0.1:27017/payrollhr";
console.log(`Connecting to Database`);
export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB :${cloudDb? "cloud": "local"}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
