import { $authHost } from ".";

export const getAllClientsApi = async () => {
    const { data } = await $authHost.get('clients/', { timeout: 5000 });
    return data;
}

export const getOneClientsApi = async (id: string) => {
    const { data } = await $authHost.get(`clients/${id}`, { timeout: 5000 });
    return data;
}


export const deleteClientsByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`clients/${id}`, { timeout: 2000 });
    return data;
}

export const updateClientsByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`clients/update`, d, { timeout: 2000 });
    return data;
}

export const createClientsApi = async (d: any) => {
    const { data } = await $authHost.post(`clients/create`, d, { timeout: 2000 });
    return data;
}