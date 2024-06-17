class GetProductQueueHandler extends Handler<QueueReturn, [number]> {
    constructor(d: Domain) {
        super(d);
    }
    handle(id: number) {
        const product = this.domain.getProduct(id);
        console.log(">> sending product", product, "to sevice X");
        return "success";
    }
}
