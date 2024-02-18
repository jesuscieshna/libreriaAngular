export class Libro {
    id:       number;
    isbn:     string;
    nombre:   string;
    autor:    string;
    edicion:  string;
    formato:  string;
    tema:     string;
    precio:   number;
    cantidad: number;
    imgname:  null;

    constructor(){
        this.id = 0;
        this.isbn = "";
        this.nombre = "";
        this.autor = "";
        this.edicion = "";
        this.formato = "";
        this.tema = "";
        this.precio = 0;
        this.cantidad = 0;
        this.imgname = null;
    }
}
