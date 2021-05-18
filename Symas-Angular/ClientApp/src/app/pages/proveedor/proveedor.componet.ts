import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls:[],
  // providers:[
  //   ProveedoresService
  // ]
})
export class ProveedorComponent implements OnInit {
  proveedores:any=[];

  constructor(private PreveedorService : ProveedoresService){
    //let proveedor=new ProveedoresService();
    this.proveedores=PreveedorService.getProveedores();
  }

  ngOnInit():void{
    this.retrieveProducts();
  }

  retrieveProducts():void{
    this.PreveedorService.getAll()
    .subscribe(
      data=>{
        this.proveedores=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
}