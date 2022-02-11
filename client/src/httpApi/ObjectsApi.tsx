import { $authHost } from ".";

export const getAllObjectsApi = async () => {
    const { data } = await $authHost.get('objects/', { timeout: 5000 });
    return data;
}

export const getOneObjectsApi = async (id: string) => {
    const { data } = await $authHost.get(`objects/${id}`, { timeout: 5000 });
    return data;
}


export const deleteObjectsByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`objects/${id}`, { timeout: 2000 });
    return data;
}

export const updateObjectsByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`objects/update`, d, { timeout: 2000 });
    return data;
}

export const createObjectsApi = async (d: any) => {
    const { data } = await $authHost.post(`objects/create`, d, { timeout: 2000 });
    return data;
}