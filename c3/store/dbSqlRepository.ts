import sqlitedb from "better-sqlite3";
import { createTable } from "../../default";

const dbusers = "./db.db";
const db = new sqlitedb(dbusers);

db.exec(createTable);

export default class dbSqlRepository {
    public getProduct(id: number) {
        return db.prepare("SELECT * FROM products WHERE id = ?").get(id);
    }
}

// function main() {
//     console.log(db.prepare("SELECT * FROM products").get());
//     return new dbSqlRepository().getProduct(1);
// }
// console.log(main());
