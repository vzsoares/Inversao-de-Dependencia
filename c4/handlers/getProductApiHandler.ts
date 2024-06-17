class GetProductApiHandler extends Handler<ApiReturn, [number]> {
    constructor(d: Domain) {
        super(d);
    }
    handle(id: number) {
        const product = this.domain.getProduct(id);
        return {
            statusCode: 200,
            body: JSON.stringify(product),
        } as ApiReturn;
    }
}
