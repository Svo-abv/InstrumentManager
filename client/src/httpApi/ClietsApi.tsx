import { $authHost } from ".";

export const getAllClientsApi = async () => {
    const { data } = await $authHost.get('clients/', { timeout: 5000 });
    return data;
}