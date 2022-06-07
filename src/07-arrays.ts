(()=>{
    let prices = [1,2,1,1, 'casa']; //inferida
//   prices.push('asd') solo acepta números
    prices.push(4);

    // let products = ['hola', true];
    // products.push(12);
    //explicito

    let mixed: (number | string | boolean )[] = ['hola', true];
    mixed.push(12); //sí funciona porque se especificó :s
    mixed.push(true);


    let numbersMixed = [1, 2, 3, 4, 5, 6, 7, 8];
    numbersMixed.map(item => item * 2) //Se te pueed alertar con los métodos para array

})();
