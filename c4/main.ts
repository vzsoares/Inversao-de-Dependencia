import { AppDomain } from "./domain/domain";
import dbSqlRepository from "./store/dbSqlRepository";

function main() {
    const store = new dbSqlRepository();
    const domain = new AppDomain(store);
    const handler = new GetProductApiHandler(domain);

    const product = handler.handle(1);
    return product;
}

console.log(main());
