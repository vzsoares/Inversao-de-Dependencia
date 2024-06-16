import { JSONFilePreset } from "lowdb/node";
import { products } from "../../default";

const defaultData = { products };
const db = await JSONFilePreset("db.json", defaultData);

export default class dbNoSqlRepository {
    public getProduct(id: number) {
        return db.data.products.find(({ id: iid }) => id === iid);
    }
}

// function main() {
//     return new dbNoSqlRepository().getProduct(1);
// }
// console.log(main());
