import { Domain } from "../types";

export abstract class Handler<T, A extends Array<any>> {
    domain: Domain;
    constructor(d: Domain) {
        this.domain = d;
    }
    abstract handle(...args: A): Promise<T>;
}
