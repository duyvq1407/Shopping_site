import instance from "./instance";

export const list = () => {
    const url = '/api/products';
    return instance.get(url);
}
export const read = (id: string) => {
    const url = `/api/product/${id}`;
    return instance.get(url);
}