import * as fs from 'fs';
import { Libro } from "./00-Libro"

//vinculo el archivo de texto con la variable librosBiblio
let librosBiblio: string = fs.readFileSync('biblio.txt', 'utf8');

//declaro el array bibliotecaDB en la que cargo desde la variable librosBiblio, los Libros que esten grabados, y los separa por cada Enter en el txt, gracias al metodo Split, y al separador \r\n
let bibliotecaDB: string[] = librosBiblio.split("\r\n");


export class GestorDeLibros {
  protected catalogo: Libro[]

  public constructor(paramCatalogo: Libro[]) {
    this.catalogo = paramCatalogo;
  }

  public consultarLibro(paramLibro: Libro): boolean {
    let encontrado: boolean = false;
    for (let i: number = 0; i < this.catalogo.length; i++) {
      if (this.catalogo[i] == paramLibro) {
        encontrado = true
      }
    }
    if (encontrado == true) {
      console.log(`El libro ${paramLibro.getTitulo()} se encuentra en la Biblioteca`)
      return true
    } else {
      console.log(`El libro ${paramLibro.getTitulo()} NO se encuentra en la Biblioteca`)
      return false
    }
  }

  public agregarLibro(paramLibro: Libro) {
    if (this.consultarLibro(paramLibro) == false) {
      this.catalogo.push(paramLibro);
      console.log(`el libro ${paramLibro.getTitulo()} se ha agregado al catalogo`)


      //Meto el Titulo del libro en el archivo Txt
      bibliotecaDB.push(paramLibro.getTitulo());
      //Convierto en string comun el array BibliotecaDB, y las "comas (,)" que separan los elementos del mismo, quedan incorporados como separador de campos.
      let bibliotecaDBFlat = String(bibliotecaDB)
      //Escribo en el archivo txt, la bibliotecaDBFlat, y mediante el metodo "replace" cambio las "comas (,)", por "Enters"
      fs.writeFileSync('biblio.txt', bibliotecaDBFlat.replace(/,/g, "\r\n"));
    }
  }



}