(()=>{
    let myDinamicVar: number | string;
    myDinamicVar = 123456789;
    myDinamicVar = 'casa';

    function greeting(mytext: string|number){
        if(typeof mytext === 'string'){
            console.log(mytext.toLowerCase());
        }else{
            console.log(mytext.toFixed(2));
        }
    }
    greeting('casa');
    greeting(12112.4444);


})();
