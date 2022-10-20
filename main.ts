import { Libro } from "./00-Libro";
import { GestorDeLibros } from "./00-GestorDeLibros";

  //Defino 3 Libros 
let libro1:Libro = new Libro("Viaje al centro de la tierra","Julio Verne",1850);
let libro2:Libro = new Libro("El señor de los anillos","JRR Tolkien",1948);
let libro3:Libro = new Libro ("Microinformática : orígenes- personajes- evolución y desarrollo","Paul Freiberger",1986);
let libro4:Libro = new Libro("Steve Jobs","Walter Isaacson",2011);

  //defino un array de libros
let biblioCopada:Libro[] = [libro3];

  //defino un gestor de libros y meto el array de libros antes creado
let gestorBooks:GestorDeLibros = new GestorDeLibros (biblioCopada);

  //testeo si un libro se encuentra en el gestor de libros
console.log("testeo si un libro se encuentra en el gestor de libros");
gestorBooks.consultarLibro(libro2);

  //defino un libro que no este en el gestor


  //
console.log("agrego libros")
gestorBooks.agregarLibro(libro1);
gestorBooks.agregarLibro(libro2);
gestorBooks.agregarLibro(libro4);
