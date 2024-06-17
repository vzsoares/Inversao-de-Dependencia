import { Domain, Store } from "../types";

export class AppDomain implements Domain {
    store: Store;
    constructor(s: Store) {
        this.store = s;
    }

    async getProduct(id: number) {
        const product = await this.store.getProduct(id);
        if (product.status === 2) {
            throw new Error("must not be status 2");
        }
        return product;
    }
}
