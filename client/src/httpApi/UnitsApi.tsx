import { $authHost } from ".";

export const getAllUnitsApi = async () => {
    const { data } = await $authHost.get('units/', { timeout: 5000 });
    return data;
}