export type Product = {
    id: number;
    status: number;
    name: string;
};

export interface Store {
    getProduct: (id: number) => Promise<Product>;
}

export interface Domain {
    store: Store;
    getProduct: (id: number) => Promise<Product>;
}

export type ApiReturn = {
    statusCode: number;
    body: string;
    headers?: {};
};

export type QueueReturn = string;
