import { dbSqlRepository } from "./store/dbSqlRepository";

async function main(id: number) {
    // access data layer
    const product = await new dbSqlRepository().getProduct(id);
    // bussines logic
    if (product.status === 2) {
        throw new Error("must not be status 2");
    }
    // presentation
    return product;
}

main(1).then((v) => console.log(v));
