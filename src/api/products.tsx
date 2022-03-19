import { IProduct } from "../types/product";
import instance from "./instance";

export const list = () => {
    const url = '/api/products';
    return instance.get(url);
}
export const read = (id: string) => {
    const url = `/api/product/${id}`;
    return instance.get(url);
}
export const remove = (_id: string) => {
    const url = `api/product/${_id}`;
    return instance.delete(url);
}
export const add = (product: IProduct) => {
    const url = '/api/products';
    return instance.post(url,product);
}
