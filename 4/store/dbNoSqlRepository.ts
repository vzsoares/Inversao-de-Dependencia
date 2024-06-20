import { JSONFilePreset } from "lowdb/node";
import { products } from "../../default";
import { Product, Store } from "../types";

const defaultData = { products };
const db = JSONFilePreset("db.json", defaultData);

// data layer implementation
export class DbNoSqlRepository implements Store {
    public async getProduct(id: number) {
        const product = await db.then((d) => {
            return d.data.products.find(({ id: iid }) => id === iid);
        });
        return product as Product;
    }
}
