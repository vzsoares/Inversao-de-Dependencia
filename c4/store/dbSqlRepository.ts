import sqlitedb from "better-sqlite3";
import { createTable } from "../../default";

const dbusers = "./db.db";
const db = new sqlitedb(dbusers);

db.exec(createTable);

export default class dbSqlRepository implements Store {
    public getProduct(id: number) {
        const product = db
            .prepare("SELECT * FROM products WHERE id = ?")
            .get(id) as Product;
        return product;
    }
}
