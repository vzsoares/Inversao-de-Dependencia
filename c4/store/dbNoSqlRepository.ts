import { JSONFilePreset } from "lowdb/node";
import { products } from "../../default";

const defaultData = { products };
const db = await JSONFilePreset("db.json", defaultData);

export default class dbNoSqlRepository implements Store {
    public getProduct(id: number) {
        const product = db.data.products.find(({ id: iid }) => id === iid);
        return product as Product;
    }
}
