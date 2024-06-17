import { ApiReturn, Domain } from "../types";
import { Handler } from "./handler";

export class GetProductApiHandler extends Handler<ApiReturn, [number]> {
    constructor(d: Domain) {
        super(d);
    }
    async handle(id: number) {
        const product = await this.domain.getProduct(id);
        return {
            statusCode: 200,
            body: JSON.stringify(product),
        } as ApiReturn;
    }
}
