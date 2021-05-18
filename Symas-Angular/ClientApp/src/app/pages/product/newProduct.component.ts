import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductInterface } from 'src/app/models/product';

@Component({
  selector: 'app-newProduct',
  templateUrl: './newProduct.component.html',
  styleUrls:['./newProduct.component.css'],
  // providers:[
  //   ProveedoresService
  // ]
})
export class NewProductComponent implements OnInit{
  productId:any;
  miFormulario=new FormGroup({
    productName: new FormControl('',Validators.required),
    categoryId:new FormControl(1),
    description:new FormControl(''),
  });

  constructor(
    private productsService:ProductsService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    this.productId=this.route.snapshot.paramMap.get('id');
    if(this.productId!=='new'){
      this.retrieveProduct();
    }
  }

  retrieveProduct():void{
    this.productsService.get(this.productId)
    .subscribe(
      data => {
        this.miFormulario.controls['productName'].setValue(data.productName);
        this.miFormulario.controls['description'].setValue(data.description);
        this.miFormulario.controls['categoryId'].setValue(`'${data.categoryId}'`);
      },
      error=>{
        console.log(error);
      });
  }

  onSave(){
    let model:ProductInterface=this.miFormulario.value;
    
    if(this.productId==='new')
    {
      this.productsService.create(model)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/products']);
        },
        error=>{
          console.log(error);
        }
      );
    }
    else{
      this.productsService.update(this.productId,model)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/products']);
        },
        error=>{
          console.log(error);
        }
      );
    }
  }
}
