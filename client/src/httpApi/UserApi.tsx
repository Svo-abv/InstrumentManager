import jwtDecode from "jwt-decode";
import { $pubHost, $authHost } from ".";

export const loginApi = async (email: string, password: string) => {

    const { data } = await $pubHost.post('/users/login', { email, password });
    localStorage.setItem("jwtHash", data);
    return jwtDecode(data);
}
export const checkApi = async () => {

    const { data } = await $authHost.get('users/auth', { timeout: 5000 });
    localStorage.setItem("jwtHash", data);
    jwtDecode(data);
    return data;
}