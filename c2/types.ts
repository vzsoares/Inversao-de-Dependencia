export type Product = {
    id: number;
    status: number;
    name: string;
};

export interface Store {
    getProduct: (id: number) => Promise<Product>;
}
