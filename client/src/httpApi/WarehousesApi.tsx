import { $authHost } from ".";

export const getAllWarehousesApi = async () => {
    const { data } = await $authHost.get('warehouses/', { timeout: 5000 });
    return data;
}