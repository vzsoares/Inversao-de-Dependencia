abstract class Handler<T, A extends Array<any>> {
    domain: Domain;
    constructor(d: Domain) {
        this.domain = d;
    }
    abstract handle(...args: A): T;
}
