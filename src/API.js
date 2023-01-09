import {
    BASE_URL
} from './Config';

const defaultConfig = {
    method: 'POST',
    mode: 'no-cors',
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
    fetchFormData: async (name, email, phone, message) => {
        const endpoint = `${BASE_URL}contact?name=${name}&email=${email}&phone=${phone}&message=${message}`;
        const bodyData = {
            name,
            email,
            phone,
            message,
        };
        return await (
            await fetch(endpoint, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        ).json();
    },
    fetchProducts: async (searchTerm, page) => {
        const endpoint = `${BASE_URL}/products/${searchTerm}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchProduct: async productId => {
        const endpoint = `${BASE_URL}/products/${productId}`
        return await (await fetch(endpoint)).json();
    }
}

export default APIConfig;