const JWT = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = JWT.verify(token, process.env.JWT_SECRET, {
            issuer: process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE,
        });
        if (!decoded) throw new Error("User not found");
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: error.message });
    }
}