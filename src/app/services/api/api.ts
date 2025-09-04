const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
    register: `${API_BASE_URL}/users/register`,
    login: `${API_BASE_URL}/users/login`,
    registerProduct: `${API_BASE_URL}/products/product-register`,
    getProduct: `${API_BASE_URL}/products/get-all-products`,
    profile: `${API_BASE_URL}/users/profile`
}