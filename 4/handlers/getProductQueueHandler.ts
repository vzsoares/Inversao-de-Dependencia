import { Domain, Handler, QueueReturn } from "../types";

// presentation layer implementation
export class GetProductQueueHandler implements Handler<QueueReturn, number> {
  domain: Domain;
  constructor(d: Domain) {
    this.domain = d;
  }
  async handle(id: number) {
    const product = await this.domain.getProduct(id);
    console.log(">> sending product", product, "to sevice X");
    return "success";
  }
}
