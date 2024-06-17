type Product = {
    id: number;
    status: number;
    name: string;
};

interface Store {
    getProduct: (id: number) => Product;
}

interface Domain {
    store: Store;
    getProduct: (id: number) => Product;
}

type ApiReturn = {
    statusCode: number;
    body: string;
    headers?: {};
};

type QueueReturn = string;
