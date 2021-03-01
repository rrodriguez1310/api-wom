export interface ILogin {
    remember: boolean;
    code: string;
    password: string;
    appId: string;
    token: string;
    header: object;
}