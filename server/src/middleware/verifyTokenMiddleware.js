import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

    // Get token from request headers, query parameters, cookies, or wherever it's being sent
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token is invalid' });
        }
        req.user = decoded; // Attach decoded payload to the request object
        next(); // Move to the next middleware
    });
}