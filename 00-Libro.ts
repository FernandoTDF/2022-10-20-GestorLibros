export class Libro {
  protected titulo:string;
  protected autor:string;
  protected anioEdicion:number;
  
  public constructor(pTitulo:string, pAutor:string, pAnioEdicion:number){
     this.titulo=pTitulo;
     this.autor=pAutor;
     this.anioEdicion=pAnioEdicion;
  }

  public setTitulo(paramTitulo:string){
    this.titulo=paramTitulo;
  }
  public getTitulo(){
    return this.titulo;
  }
  public setAutor(paramAutor:string){
    this.autor=paramAutor;
  }
  public getAutor(){
    return this.autor;
    }
  public setAnioEdicion(paramAnio:number){
    this.anioEdicion=paramAnio;
  
  }
  public getAnioEdicion(){
    return this.anioEdicion;
  }

}
