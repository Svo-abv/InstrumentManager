import { $authHost } from ".";

export const getAllDocPaymentsApi = async () => {
    const { data } = await $authHost.get('documentpayment/', { timeout: 5000 });
    return data;
}

export const getOneDocPaymentsApi = async (id: string) => {
    const { data } = await $authHost.get(`documentpayment/${id}`, { timeout: 5000 });
    return data;
}


export const deleteDocPaymentsByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`documentpayment/${id}`, { timeout: 2000 });
    return data;
}

export const updateDocPaymentsByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`documentpayment/update`, d, { timeout: 2000 });
    return data;
}

export const createDocPaymentsApi = async (d: any) => {
    const { data } = await $authHost.post(`documentpayment/create`, d, { timeout: 2000 });
    return data;
}