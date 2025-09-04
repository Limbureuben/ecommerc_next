const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
    register: `${API_BASE_URL}/users/register`,
    login: `${API_BASE_URL}/users/login`,
    registerProduct: `${API_BASE_URL}/products/product-register`,
    getProduct: `${API_BASE_URL}/products/get-all-products`,
    deleteProduct: `${API_BASE_URL}/products/delete-product`,
    updateProduct: `${API_BASE_URL}/products/update-product`,
    profile: `${API_BASE_URL}/users/profile`,
    stats: `${API_BASE_URL}/users/stats`
}