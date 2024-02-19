export class Libro {
    Id:       number;
    ISBN:     string;
    Titulo:   string;
    Precio:   number;
    Tema:     string;
    Autor:    string;
    Edicion:  string;
    Formato:  string;
    Cantidad: number;
    URL:  null;

    constructor(){
        this.Id = 0;
        this.ISBN = "";
        this.Titulo = "";
        this.Autor = "";
        this.Edicion = "";
        this.Formato = "";
        this.Tema = "";
        this.Precio = 0;
        this.Cantidad = 0;
        this.URL = null;
    }
}
