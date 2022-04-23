interface ResponseModel<T> {
    data: T;
    code: string;
    message: string;
    error?: any;
}
interface LoginUser {
    username: string;
    password: string;
}
type ResponseDefine<T> = Promise<ResponseModel<T>>
