(()=>{

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const login = (data: {email: string, password: number}) => {
        console.log(data.email, data.password);
    }
    // login("jl@gmail.com",'1123213');

    login({
        email: 'jl@gmail.com',
        password: 121212
    })

    const products: any[] = [];
    const addProduct = (data:{
        title: string,
        createdAt: Date,
        stock: number,
        size?:Sizes
    }) => {
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
})();
