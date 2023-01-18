import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


  obj: any = {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"]
    const products: string = this.activatedRoute.snapshot.params["productos"]
    this.obj = JSON.parse(products).find((prod: { id: number; }) => prod.id === parseInt(id)) || {}
  }

  constructor(private activatedRoute: ActivatedRoute) { }
}
