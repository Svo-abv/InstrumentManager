import { $authHost } from ".";

export const getAllOrgApi = async () => {
    const { data } = await $authHost.get('organizations/', { timeout: 5000 });
    return data;
}