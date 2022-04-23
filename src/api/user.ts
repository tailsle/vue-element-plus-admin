import http from "@/utils/axios";
export const login = (user: LoginUser): ResponseDefine<string> => {
    return http.post('/user/login', user)
}
