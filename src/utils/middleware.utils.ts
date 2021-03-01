import { Request, NextFunction, Response } from 'express';
import { CER_PUBLIC } from '../constants/conf.constants';
import jwt from 'jsonwebtoken';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        console.log(req.headers);
        const isTokenExpired = (token: string): boolean => {

            const { exp } = jwt.verify(token, CER_PUBLIC) as {
                exp: number;
            };

            const expirationDatetimeInSeconds = exp * 1000;
            return Date.now() >= expirationDatetimeInSeconds;
        };

        if (isTokenExpired(`${req.headers.authorization}`) === false) {
            const decoded = jwt.verify(`${req.headers.authorization}`, CER_PUBLIC)
            req.body.payload = decoded
            next();
        } else {
            return res.status(401).json({ message: 'El token no es valido' })
        }
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}
export default authMiddleware;