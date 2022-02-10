import { $authHost } from ".";

export const getAllDocTypesApi = async () => {
    const { data } = await $authHost.get('documenttypes/', { timeout: 5000 });
    return data;
}


export const getOneDocTypesApi = async (id: string) => {
    const { data } = await $authHost.get(`documenttypes/${id}`, { timeout: 5000 });
    return data;
}


export const deleteDocTypesByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`documenttypes/${id}`, { timeout: 2000 });
    return data;
}

export const updateDocTypesByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`documenttypes/update`, d, { timeout: 2000 });
    return data;
}

export const createDocTypesApi = async (d: any) => {
    const { data } = await $authHost.post(`documenttypes/create`, d, { timeout: 2000 });
    return data;
}