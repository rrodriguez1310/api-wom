import { Request, NextFunction, Response } from 'express';
import requestIp from 'request-ip';

const ipMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const clientIp =  requestIp.getClientIp(req); 
    req.body.ip = clientIp;
    next();
};

export default ipMiddleware;
