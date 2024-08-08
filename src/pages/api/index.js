// pages/api/index.js

import connectDB from "@/database/db";

connectDB()
export default function handler(req, res) {
    // Your API logic goes here


    res.status(200).json({ message: 'This is an example API endpoint' });
}