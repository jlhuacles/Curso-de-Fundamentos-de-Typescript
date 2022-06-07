(()=>{
    let myNumber : number; //No se le puede asignar undefined ni null let myNumber:number =  null;
    let myString : string;

    let myNull = null; //Cuando asignamos un null o undefined se asigna al typo any
    let trueNull: null = null; //Se puede asignar tipandolo explícitamente

    let myUndefined = undefined;


    let myNumberTwo : number | null = null; //Cuando se quiere inicialziar con null o
    let myNumberThree : number | undefined = undefined; //Cuando se quiere inicializar con undefined


    function hi(name: string | null){
        let hello = 'Hola';
        if(name){
             hello += ' ' + name;
        }else{
             hello += 'nobody';
        }
        console.log(hello);
    }

    function hiV2(name: string | null){
        let hello = 'Hola';
        hello += name?.toLowerCase() ?? 'nobody'; //Si no existe devuelve un nulo en este caso, combinando el operador de fusión nulo: ?? - junto con el optional chaining
        console.log(hello);
    }

    hi('JL');
    hi(null);

    hiV2('JL');
    hiV2(null);
})();
