import sqlitedb from "better-sqlite3";
import { createTable } from "../../default";
import { Product, Store } from "../types";

const dbproducts = "./db.db";
const db = new sqlitedb(dbproducts);

db.exec(createTable);

export class dbSqlRepository implements Store {
    public async getProduct(id: number) {
        const product = db
            .prepare("SELECT * FROM products WHERE id = ?")
            .get(id) as Product;
        return product;
    }
}
