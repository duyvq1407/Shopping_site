import { IProduct } from "../types/product";
import instance from "./instance";
const { user, token } = JSON.parse(localStorage.getItem('user') as string); // lấy từ localstorage ra

export const list = () => {
    const url = '/api/products';
    return instance.get(url);
}
export const read = (id: string) => {
    const url = `/api/products/${id}`;
    return instance.get(url);
}
export const remove = (_id: string) => {
    const url = `api/products/${_id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const add = (product: IProduct) => {
    const url = `/api/products/${user._id}`;
    return instance.post(url,product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (product: IProduct) => {
    const url = `/api/products/${product._id}/${user._id}`;
    return instance.put(url,product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}