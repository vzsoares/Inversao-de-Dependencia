import { AppDomain } from "./domain/domain";
import { dbSqlRepository } from "./store/dbSqlRepository";

async function main(id: number) {
    const store = new dbSqlRepository();
    const domain = new AppDomain(store);

    const product = await domain.getProduct(id);
    const res = {
        statusCode: 200,
        body: JSON.stringify(product),
    };
    return res;
}

main(2).then((v) => console.log(v));
