import { $authHost } from ".";

export const getAllDocStockApi = async () => {
    const { data } = await $authHost.get('documentstock/', { timeout: 5000 });
    return data;
} 