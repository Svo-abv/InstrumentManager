import { $authHost } from ".";

export const getAllUnitsApi = async () => {
    const { data } = await $authHost.get('units/', { timeout: 5000 });
    return data;
}

export const deleteByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`units/${id}`, { timeout: 2000 });
    return data;
}