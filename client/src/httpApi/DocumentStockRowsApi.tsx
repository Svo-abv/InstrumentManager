import { $authHost } from ".";

export const getAllDocStockRowskApi = async (id: string) => {
    const { data } = await $authHost.get(`documentstockrows/${id}`, { timeout: 5000 });
    return data;
}

export const createBlunckDocStockRowApi = async (id: string) => {
    const { data } = await $authHost.get(`documentstockrows/createblunk/${id}`, { timeout: 5000 });
    return data;
}

export const deleteDocStockRowApi = async (id: string) => {
    const { data } = await $authHost.delete(`documentstockrows/${id}`, { timeout: 2000 });
    return data;
}

export const updateDocStockRowsApi = async (d: any) => {
    const { data } = await $authHost.post(`documentstockrows/update`, d, { timeout: 2000 });
    return data;
}
export const saveAllDocStockRowsApi = async (d: any) => {
    const { data } = await $authHost.post(`documentstockrows/save`, d, { timeout: 2000 });
    return data;
}