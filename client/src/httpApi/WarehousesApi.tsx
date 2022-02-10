import { $authHost } from ".";

export const getAllWarehousesApi = async () => {
    const { data } = await $authHost.get('warehouses/', { timeout: 5000 });
    return data;
}

export const getOneWarehousesApi = async (id: string) => {
    const { data } = await $authHost.get(`warehouses/${id}`, { timeout: 5000 });
    return data;
}


export const deleteWarehousesByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`warehouses/${id}`, { timeout: 2000 });
    return data;
}

export const updateWarehousesByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`warehouses/update`, d, { timeout: 2000 });
    return data;
}

export const createWarehousesApi = async (d: any) => {
    const { data } = await $authHost.post(`warehouses/create`, d, { timeout: 2000 });
    return data;
}