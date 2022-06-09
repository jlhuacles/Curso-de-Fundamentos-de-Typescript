

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = { //Se envía el objeto como tipo con la especificación de tipos
    title: string,
    createdAt: Date,
    stock: number,
    size?:Sizes
};
