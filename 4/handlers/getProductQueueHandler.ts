import { Domain, QueueReturn } from "../types";
import { Handler } from "./handler";

// presentation layer implementation
export class GetProductQueueHandler extends Handler<QueueReturn, [number]> {
    constructor(d: Domain) {
        super(d);
    }
    async handle(id: number) {
        const product = await this.domain.getProduct(id);
        console.log(">> sending product", product, "to sevice X");
        return "success";
    }
}
