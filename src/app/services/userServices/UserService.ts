import { LoginData, RegisterData } from '../../model/UserModel';
import { api } from '../api/api';
import { postRequest } from '../Helper/httpService';


export async function loginUser(data: LoginData) {
    const res = await fetch(api.login, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Login failed");
    }

    return res.json();
}

export async function registerUser(data: RegisterData) {
  return postRequest(api.register, data);
}

export async function fetchProfile() {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(api.profile, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to fetch profile");
    }

    return res.json();
}


export async function fetchStats() {
    const token = localStorage.getItem("token");
    const res = await fetch(api.stats, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to fetch stats");
    }
    return res.json();
}