export default class Cl_empresa{
    constructor(){
        this.acumSuelF = 0;
    }

    procesarPersonal(p){
        this.acumSuelF += p.calcSuelF();
    }

    devolverSuelPagar(){
        return this.acumSuelF;
    }
}