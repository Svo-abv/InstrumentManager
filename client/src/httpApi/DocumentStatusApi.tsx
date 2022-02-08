import { $authHost } from ".";

export const getAllDocStatusApi = async () => {
    const { data } = await $authHost.get('documentstatus/', { timeout: 5000 });
    return data;
}

export const getOneDocStatusApi = async (id: string) => {
    const { data } = await $authHost.get(`documentstatus/${id}`, { timeout: 5000 });
    return data;
}


export const deleteDocStatusByIdApi = async (id: string) => {
    const { data } = await $authHost.delete(`documentstatus/${id}`, { timeout: 2000 });
    return data;
}

export const updateDocStatusByIdApi = async (d: any) => {
    const { data } = await $authHost.post(`documentstatus/update`, d, { timeout: 2000 });
    return data;
}

export const createDocStatusApi = async (d: any) => {
    const { data } = await $authHost.post(`documentstatus/create`, d, { timeout: 2000 });
    return data;
}