import api from "../utils/api";

export const registerUser = async (data) => {
    try {

        const response = await api.post(
            "/api/register",
            data
        );

        return response.data;

    } catch (error) {
        throw error;
    }
};

export const loginUser = async (data) => {
    try {

        const response = await api.post(
            "/api/login",
            data
        );

        return response.data;

    } catch (error) {
        throw error;
    }
};