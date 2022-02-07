import { $authHost } from ".";

export const getAllItemsApi = async () => {
    const { data } = await $authHost.get('items/', { timeout: 5000 });
    return data;
}