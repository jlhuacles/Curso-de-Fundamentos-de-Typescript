(()=>{
    let productPrice = 100;
    productPrice = 12;
    console.log(productPrice);

    let customerAge: number = 28
    customerAge = customerAge;
    console.log(customerAge, 'customerAge')

    let productInStock: number = 0;
    console.log('productInStock', productInStock); //Ocurre error si no ha sido incializada ni asignada

    if(productInStock> 10){
        console.log('is greater');
    }

    let discount = parseInt('2'); //NaN puede ser tratado como número
    console.log('discount', discount);
    if(discount<=100){
        console.log('apply')
    }else{
        console.log('not apply');
    }

    //hexadecimal

    let hex = 0xfff;
    console.log('hexadecimal', hex);
    let unBinario = 0b101010101;
    console.log('unBinario', unBinario);

    const myNumbert: Number = 10; // no recomendado por ahora, no confundir con number (minúscula, type)

})();


