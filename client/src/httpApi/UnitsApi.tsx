import { $authHost } from ".";

export const getAllUnitsApi = async () => {
    const { data } = await $authHost.get('units/', { timeout: 5000 });
    return data;
}

export const getOneUnitsApi = async (id: string) => {
    const { data } = await $authHost.get(`units/${id}`, { timeout: 5000 });
    return data;
}


export const deleteUnitsByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`units/${id}`, { timeout: 2000 });
    return data;
}

export const updateUnitsByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`units/update`, d, { timeout: 2000 });
    return data;
}

export const createUnitsApi = async (d: any) => {
    const { data } = await $authHost.post(`units/create`, d, { timeout: 2000 });
    return data;
}