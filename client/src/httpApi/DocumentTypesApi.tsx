import { $authHost } from ".";

export const getAllDocTypesApi = async () => {
    const { data } = await $authHost.get('documenttypes/', { timeout: 5000 });
    return data;
}