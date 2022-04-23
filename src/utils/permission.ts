import jsCookie from 'js-cookie'
export const setToken = (token: string) => jsCookie.set('access_token', token)
export const getToken = () => jsCookie.get('access_token')
export const removeToken = () => jsCookie.remove('access_token')
