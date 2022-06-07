(()=>{
    //Alias -> usamos la plabra type
    type UserId =  string | number ;
    let userId: UserId;


    //Literal types -> especificamos el subtipo directamente
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';

    function greeting(userId: UserId, sizes: Sizes){
        if(typeof userId === 'string'){
            console.log(userId.toLowerCase());
        }else{
            console.log(userId.toFixed(2));
        }
    }

    greeting(111,  'M');

})();
