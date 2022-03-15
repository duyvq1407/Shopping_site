import instance from "./instance";

export const list = () => {
    const url = '/api/products';
    return instance.get(url);
}