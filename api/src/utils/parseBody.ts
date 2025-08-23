import { Request, Response, NextFunction, RequestHandler } from "express";

export const parseReqBody:RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    // Check if the body exists else send response
    if (!req.body) {
        res.status(400).json({
            error: 'Missing Request Body. No payload Received !!!'
        })
    }
    next();
}
