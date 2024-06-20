import { dbSqlRepository } from "./store/dbSqlRepository";

async function main(id: number) {
    const product = await new dbSqlRepository().getProduct(id);
    if (product.status === 2) {
        throw new Error("must not be status 2");
    }
    return product;
}

main(1).then((v) => console.log(v));
