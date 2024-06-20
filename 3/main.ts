import { AppDomain } from "./domain/domain";
import { dbSqlRepository } from "./store/dbSqlRepository";

async function main(id: number) {
    // access data layer
    const store = new dbSqlRepository();
    // access domain layer
    const domain = new AppDomain(store);

    // presentation
    const product = await domain.getProduct(id);
    const res = {
        statusCode: 200,
        body: JSON.stringify(product),
    };
    return res;
}

main(2).then((v) => console.log(v));
