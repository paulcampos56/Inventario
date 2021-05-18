class moduloEquipo {
    constructor(codigo, cantidad, descripcion, caracteristicas, marca, modelo, tipo, capacidad, vUtil) {
            this._codigo = codigo
            this._cantidad = cantidad
            this._descripcion = descripcion
            this._caracteristicas = caracteristicas
            this._marca = marca
            this._modelo = modelo
            this._tipo = tipo
            this._capacidad = capacidad
            this._vUtil = vUtil
        }
        //Codigo
    set scodigo(c) {
        this._codigo = c
    }

    get gcodigo() {
            return this._codigo
        }
        //Cantidad
    set scantidad(c) {
        this._cantidad = c
    }

    get gcantidad() {
            return this._cantidad
        }
        //Descripcion
    set sdescripcion(c) {
        this._descripcion = c
    }

    get gdescripcion() {
            return this._descripcion
        }
        //Caracteristicas
    set scaracteristicas(c) {
        this._caracteristicas = c
    }

    get gcaracteristicas() {
            return this._caracteristicas
        }
        //Marca
    set smarca(c) {
        this._marca = c
    }

    get gmarca() {
            return this._marca
        }
        //Modelo
    set smodelo(c) {
        this._modelo = c
    }

    get gmodelo() {
            return this._modelo
        }
        //Tipo
    set stipo(c) {
        this._tipo = c
    }

    get gtipo() {
            return this._tipo
        }
        //Capaciad
    set scapacidad(c) {
        this._capacidad = c
    }

    get gcapacidad() {
            return this._capacidad
        }
        //vUtili
    set svUtil(c) {
        this._vUtil = c
    }

    get gvUtil() {
        return this._vUtil
    }

    imprimir() {
        console.log("Codigo: " + this._codigo + " Cantidad: " + this._cantidad + " Descripcion: " + this.descripcion +
            " Caracteristicas: " + this._caracteristicas + " Marca: " + this._descripcion + " Modelo: " + this._modelo +
            " Tipo: " + this._tipo + " Capacidad: " + this._capacidad + " V.Util: " + this._vUtil)
    }
}
let objetoEquipo = new moduloEquipo('123453', 3, 'Revolvedora', 'Roja', 'Tupper', 'RSS', 'TodoTerreno', 123, 2);
objetoEquipo._vUtil = 35
objetoEquipo.imprimir();