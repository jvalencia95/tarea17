import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {


  productos = [
    { id: 1, codigo: 1, descripcion: "Producto1", compra: 200.00, venta: 300.00, ganancia: 5, existencia: 100.00 },
    { id: 2, codigo: 2, descripcion: "Producto2", compra: 200.00, venta: 300.00, ganancia: 4, existencia: 100.00 },
    { id: 3, codigo: 3, descripcion: "Producto3", compra: 200.00, venta: 300.00, ganancia: 9, existencia: 100.00 },
    { id: 4, codigo: 4, descripcion: "Producto4", compra: 200.00, venta: 300.00, ganancia: 15, existencia: 100.00 },
    { id: 5, codigo: 5, descripcion: "Producto5", compra: 200.00, venta: 300.00, ganancia: 20, existencia: 100.00 },
  ]

}
