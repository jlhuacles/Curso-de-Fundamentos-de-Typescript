(()=>{
    const calcTotal = (prices: number[]):number=>{
        let total = 0;
        prices.forEach((item) => {
            total += item});
        return total;
    }

    const printtotal = (prices: number[]): void => { //Tipo sin retorno: void
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);

    }



    const rta = calcTotal([1,2,3,4,5,6,9]); //Se estaba infiriendo el retorno de las funciones
    console.log(rta)
})();
