// pages/api/index.js

export default function handler(req, res) {
    const { pageNumber } = req.query
    res.status(200).json({ message: 'User API endpoint '+ pageNumber });
}