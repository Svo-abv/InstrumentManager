import { $authHost } from ".";

export const getAllDocPaymentsApi = async () => {
    const { data } = await $authHost.get('documentpayment/', { timeout: 5000 });
    return data;
} 