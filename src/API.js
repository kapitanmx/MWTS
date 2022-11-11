import {
    BASE_URL
} from './Config';

const defaultConfig = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    }
};

const APIConfig = {
    fetchPhotos: async () => {
        const endpoint = `${BASE_URL}gallery`
        return await (await fetch(endpoint)).json();
    },
    fetchPhoto: async photoId => {
        const endpoint = `${BASE_URL}gallery/${photoId}`
        return await (await fetch(endpoint)).json();
    },
    fetchFormData: async (name, email, message) => {
        const endpoint = `${BASE_URL}/form?name=${name}&email=${email}&message=${message}`;
        const bodyData = {
            name,
            email,
            message,
        };
        return await (
            await fetch(endpoint, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        ).json();
    },
}

export default APIConfig;