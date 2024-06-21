import { ApiReturn, Domain, Handler } from "../types";

// presentation layer implementation
export class GetProductApiHandler implements Handler<ApiReturn, number> {
    domain: Domain
    constructor(d: Domain) {
        this.domain = d
    }
    async handle(id: number) {
        const product = await this.domain.getProduct(id);
        return {
            statusCode: 200,
            body: JSON.stringify(product),
        } as ApiReturn;
    }
}
