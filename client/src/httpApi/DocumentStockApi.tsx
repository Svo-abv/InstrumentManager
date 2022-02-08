import { $authHost } from ".";

export const getAllDocStockApi = async () => {
    const { data } = await $authHost.get('documentstock/', { timeout: 5000 });
    return data;
}

export const getOneDocStockApi = async (id: string) => {
    const { data } = await $authHost.get(`documentstock/${id}`, { timeout: 5000 });
    return data;
}


export const deleteDocStockByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`documentstock/${id}`, { timeout: 2000 });
    return data;
}

export const updateDocStockByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`documentstock/update`, d, { timeout: 2000 });
    return data;
}

export const createDocStockApi = async (d: any) => {
    const { data } = await $authHost.post(`documentstock/create`, d, { timeout: 2000 });
    return data;
}