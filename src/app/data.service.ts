import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url='/api';
  constructor(private http: HttpClient) {}
  
  //GET EMPRESA
  getEmpresas(){
    return this.http.get(this.url);
  }

  //GET UNA EMPRESA
  getUnaEmpresa(id_empresa:string){
    return this.http.get(this.url+'/'+id_empresa);
  }


  //AGREGAR EMPRESA
  addEmpresa(empresa:EmpresaDato){
    return this.http.post(this.url, empresa);
  }

  //ELIMINAR EMPRESA
  deleteEmpresa(id_empresa:string){
    return this.http.delete(this.url+'/'+id_empresa);
  }

  //MODIFICAR EMPRESA
  editEmpresa(id_empresa:string,empresa:EmpresaDato){
    return this.http.put(this.url+'/'+id_empresa, empresa);
  }





}


export interface EmpresaDato{
  id_empresa?:string;
  nombre?:string;
  n_productos?:string;
}