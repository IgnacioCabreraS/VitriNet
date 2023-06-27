import { Component, OnInit } from '@angular/core';
import { DataService, EmpresaDato } from 'src/app/data.service';

@Component({
  selector: 'app-tienda-test',
  templateUrl: './tienda-test.component.html',
  styleUrls: ['./tienda-test.component.scss'],
  
})

export class TiendaTestComponent implements OnInit {
  
  //Variable
  ListarEmpresa: EmpresaDato[]=[];
  constructor(private DataService:DataService){

  }

  ngOnInit(): void {
    this.listaEmpresa();
  }

  listaEmpresa(){
    this.DataService.getEmpresas().subscribe(
      res=>{
        console.log(res)
        this.ListarEmpresa=<any>res;
      },
      err => console.log(err)
    );
  }

  
}
