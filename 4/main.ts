import { AppDomain } from "./domain/domain";
// import { GetProductApiHandler } from "./handlers/getProductApiHandler";
import { GetProductQueueHandler } from "./handlers/getProductQueueHandler";
import { dbSqlRepository } from "./store/dbSqlRepository";

async function main(id: number) {
    const store = new dbSqlRepository();
    const domain = new AppDomain(store);
    // const handler = new GetProductApiHandler(domain);
    const handler = new GetProductQueueHandler(domain);

    const product = await handler.handle(id);
    return product;
}

main(1).then((v) => console.log(v));
