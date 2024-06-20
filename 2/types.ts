export type Product = {
    id: number;
    status: number;
    name: string;
};

// data layer
// all implementations will follow
export interface Store {
    getProduct: (id: number) => Promise<Product>;
}
