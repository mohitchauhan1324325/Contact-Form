import api from "../utils/api";

export const getContact = async () => {
    try {

        const response = await api.get(
            "/api/all"
        );

        return response.data;

    } catch (error) {
        throw error;
    }
};

export const saveContact = async (data) => {
    try {

        const response = await api.post(
            "/api/submit",
            data
        );

        return response.data;

    } catch (error) {
        throw error;
    }
};

export const delContact = async (id) => {
    try {

        const response = await api.delete(
            `/api/${id}`
        );

        return response.data;

    } catch (error) {
        throw error;
    }
};