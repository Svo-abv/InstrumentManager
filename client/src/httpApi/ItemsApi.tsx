import { $authHost } from ".";

export const getAllItemsApi = async () => {
    const { data } = await $authHost.get('items/', { timeout: 5000 });
    return data;
}

export const getOneItemsApi = async (id: string) => {
    const { data } = await $authHost.get(`items/${id}`, { timeout: 5000 });
    return data;
}


export const deleteItemsByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`items/${id}`, { timeout: 2000 });
    return data;
}

export const updateItemsByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`items/update`, d, { timeout: 2000 });
    return data;
}

export const createItemsApi = async (d: any) => {
    const { data } = await $authHost.post(`items/create`, d, { timeout: 2000 });
    return data;
}