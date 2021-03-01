import { CER_PUBLIC } from '../constants/conf.constants';
import jwt, { decode } from 'jsonwebtoken';

export class DecodeToken {

    token: string;

    constructor(token: string) {
        this.token = token;
    }

    public async Decode() {
        try {
            
            const isTokenExpired = (token: string): boolean => {
                const { exp } = jwt.verify(token, CER_PUBLIC) as {
                    exp: number;
                };
                const expirationDatetimeInSeconds = exp * 1000;
                return Date.now() >= expirationDatetimeInSeconds;
            }
            
            if (isTokenExpired(this.token) === false) {
                const decoded =  jwt.verify(this.token, CER_PUBLIC);
                return decoded;
            }else{
                throw new Error("Jwt expirado");
            }
        } catch (error) {
            return error
        }
    }
}
