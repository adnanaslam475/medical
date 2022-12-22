import { AUTH_LOGIN, AUTH_SIGN_UP } from '../../components/ConstAPI/ConstAPI.js';
import { apiInstance } from './AxiosApi.js';

export const login = (payload) => {
    return apiInstance.post(AUTH_LOGIN, payload);
}
export const signUp = (payload) => {
    return apiInstance.post(AUTH_SIGN_UP, payload);
}
