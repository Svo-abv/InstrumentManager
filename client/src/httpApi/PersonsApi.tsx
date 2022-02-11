import { $authHost } from ".";

export const getAllPersonsApi = async () => {
    const { data } = await $authHost.get('persons/', { timeout: 5000 });
    return data;
}

export const getOnePersonsApi = async (id: string) => {
    const { data } = await $authHost.get(`persons/${id}`, { timeout: 5000 });
    return data;
}


export const deletePersonsByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`persons/${id}`, { timeout: 2000 });
    return data;
}

export const updatePersonsByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`persons/update`, d, { timeout: 2000 });
    return data;
}

export const createPersonsApi = async (d: any) => {
    const { data } = await $authHost.post(`persons/create`, d, { timeout: 2000 });
    return data;
}