(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    function createProductToJson(title: string, createdAt: Date, stock: number, size: Sizes ){
        return{
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto1 = createProductToJson('Product1',new Date(), 12, 'XL');
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.createdAt);
    console.log(producto1.stock)

    const createProductToJsonV2 = (title: string, createdAt: Date, stock: number, size?: Sizes) => {
        return{
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto2 = createProductToJsonV2('Product2',new Date(), 12);
    console.log(producto2);
})();
