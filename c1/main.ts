import sqlitedb from "better-sqlite3";

import { createTable } from "../default";

export type Product = {
    id: number;
    status: number;
    name: string;
};

const dbproducts = "./db.db";
const db = new sqlitedb(dbproducts);

db.exec(createTable);

async function main(id: number) {
    const product = (await db
        .prepare("SELECT * FROM products WHERE id = ?")
        .get(id)) as Product;
    if (product.status === 2) {
        throw new Error("must not be status 2");
    }
    return product;
}

main(1).then((v) => console.log(v));
