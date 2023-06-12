import { Component, OnInit } from '@angular/core';
import dataTiendas from './tienda.json';

interface Tienda{
  id: Number;
  nombre: String;
  paginaWeb: String;
  cantProductos: String;
}

@Component({
  selector: 'app-tienda-test',
  templateUrl: './tienda-test.component.html',
  styleUrls: ['./tienda-test.component.scss'],
  
})
export class TiendaTestComponent implements OnInit {
  
  constructor() {}

  tiendas: Tienda[] = dataTiendas;

  ngOnInit(): void {}
  
}
