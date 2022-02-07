import { $authHost } from ".";

export const getAllDocStatusApi = async () => {
    const { data } = await $authHost.get('documentstatus/', { timeout: 5000 });
    return data;
}