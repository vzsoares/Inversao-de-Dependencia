import { FooDomain } from "./domain/fooDomain";
import { GetProductQueueHandler } from "./handlers/getProductQueueHandler";
import { dbSqlRepository } from "./store/dbSqlRepository";

async function main(id: number) {
    // access data layer
    const store = new dbSqlRepository();
    // access domain layer
    const domain = new FooDomain(store);
    // access presentation layer
    const handler = new GetProductQueueHandler(domain);

    const product = await handler.handle(id);
    return product;
}

main(1).then((v) => console.log(v));
