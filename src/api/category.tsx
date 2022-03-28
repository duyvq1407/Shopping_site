import { CategoryType } from "../types/category";
import instance from "./instance";
const { user, token } = JSON.parse(localStorage.getItem('user') as string); // lấy từ localstorage ra

export const list = () => {
    const url = '/api/categories';
    return instance.get(url);
}
export const read = (id: string) => {
    const url = `/api/categories/${id}`;
    return instance.get(url);
}
export const remove = (_id: string) => {
    const url = `api/categories/${_id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const add = (category: CategoryType) => {
    const url = `/api/categories/${user._id}`;
    return instance.post(url,category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (category: CategoryType) => {
    const url = `/api/categories/${category._id}/${user._id}`;
    return instance.put(url,category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
