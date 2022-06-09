(()=>{

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = { //Se envía el objeto como tipo con la especificación de tipos
        title: string,
        createdAt: Date,
        stock: number,
        size?:Sizes
    }


    const products: Product[] = [];
    const addProduct = (data: Product) => {
        products.push(data)
    }

    addProduct({
        title: 'Producto2',
        createdAt: new Date(),
        stock: 3333,
        size: 'M'
    })

    const casa = {
        title: 'casita',
        edad: 220
    }

    casa.title = 'casota';
    console.log(casa.title);
    console.log(products);

    // products.push(1212);
    // products.push('asdasd');
    products.push({
      title: 'prod3',createdAt: new Date(), stock: 333, size: 'M'
    })

})();
