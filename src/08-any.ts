(()=>{
    let myDinamicVar: any; //Cualquier cosa, se aconseja que no sea usado.
    myDinamicVar = null;
    myDinamicVar = "";
    myDinamicVar = [];
    myDinamicVar = 2;
    myDinamicVar = 'casa';

    myDinamicVar = 'casa';
    const rta = (myDinamicVar as string).toLowerCase();

    myDinamicVar = 1212;
    const rta2 =(<number>myDinamicVar).toFixed;




})();
