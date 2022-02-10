import { $authHost } from ".";

export const getAllOrgApi = async () => {
    const { data } = await $authHost.get('organizations/', { timeout: 5000 });
    return data;
}

export const getOneOrgApi = async (id: string) => {
    const { data } = await $authHost.get(`organizations/${id}`, { timeout: 5000 });
    return data;
}


export const deleteOrgByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`organizations/${id}`, { timeout: 2000 });
    return data;
}

export const updateOrgByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`organizations/update`, d, { timeout: 2000 });
    return data;
}

export const createOrgApi = async (d: any) => {
    const { data } = await $authHost.post(`organizations/create`, d, { timeout: 2000 });
    return data;
}