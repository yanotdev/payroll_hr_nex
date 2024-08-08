import { getUsers } from "@/database/models/repos/userRepo";

// route = /api/user/users
export default async function handler(req, res) {
    const { pageSize, page, active } = req.query
    try {
        const result = await getUsers(pageSize, page, active);
        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
    
}