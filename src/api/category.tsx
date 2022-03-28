import { CategoryType } from "../types/category";
import instance from "./instance";
const { user, token } = JSON.parse(localStorage.getItem('user') as string); // lấy từ localstorage ra

export const listCate = () => {
    const url = '/api/categories';
    return instance.get(url);
}
export const readCate = (id: string) => {
    const url = `/api/categories/${id}`;
    return instance.get(url);
}
export const removeCate = (_id: string) => {
    const url = `api/categories/${_id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const addCate = (category: CategoryType) => {
    const url = `/api/categories/${user._id}`;
    return instance.post(url,category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const updateCate = (category: CategoryType) => {
    const url = `/api/categories/${category._id}/${user._id}`;
    return instance.put(url,category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
