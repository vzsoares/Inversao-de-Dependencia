export type Product = {
    id: number;
    status: number;
    name: string;
};

// data layer interface
export interface Store {
    getProduct: (id: number) => Promise<Product>;
}

// domain layer interface
// all domain implementations will folow this
export interface Domain {
    store: Store;
    getProduct: (id: number) => Promise<Product>;
}

// just a presentation type
export type ApiReturn = {
    statusCode: number;
    body: string;
    headers?: {};
};

