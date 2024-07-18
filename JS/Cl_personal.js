export default class Cl_personal{
    constructor(n, t, s){
        this.nombre = n;
        this.tipo = t;
        this.sueldo = +s;
    }

    set nombre(n){
        this._nombre = n;
    }

    set tipo(t){
        this._tipo = t;
    }
    
    set sueldo(s){
        this._sueldo = +s;
    }

    get nombre(){
        return this._nombre;
    }

    get tipo(){
        return this._tipo;
    }

    get sueldo(){
        return this._sueldo;
    }

    calcAumento(){
        if (this.tipo === "Obrero")
            return this.sueldo * 0.20;
        else if (this.tipo === "Administrativo")
            return this.sueldo * 0.10;
        else
            return 0;
    }

    calcSuelF(){
        return this.sueldo + this.calcAumento();
    }
}