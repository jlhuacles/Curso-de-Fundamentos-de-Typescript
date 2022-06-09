import {addProduct, calcStock, products} from './producte.service';

addProduct({
    title: 'Producto2',
    createdAt: new Date(),
    stock: 3333,
    size: 'M'
})

addProduct({
    title: 'Producto3',
    createdAt: new Date(),
    stock: 444,
    size: 'L'
})

addProduct({
    title: 'Product4',
    createdAt: new Date(),
    stock: 12,
    size: 'L'
})


console.log(products);
const total = calcStock();
console.log('total es ', total);
