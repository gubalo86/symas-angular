import { AfterViewInit, Component,ViewChild} from "@angular/core";
import {Router} from '@angular/router';
import { MatTableDataSource } from "@angular/material";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ProductInterface } from "src/app/models/product";
import { ProductsService } from "src/app/services/products/products.service";

@Component({
  selector:'app-productsList',
  templateUrl:'./productsList.component.html',
  styleUrls:['./productsList.component.css']
})

export class ProductsListComponent implements AfterViewInit{
  displayedColumns: string[] = [
    'id'
    ,'productName'
    ,'description'
  ];

  products:ProductInterface[]=[];
  dataSource:any;
  

  constructor(
    private ProductsService:ProductsService,private router:Router)
  {}

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:false}) sort: MatSort;

  ngAfterViewInit (){
    this.retrieveProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  retrieveProducts=()=>{
    this.ProductsService.getAll()
    .subscribe(
      data=>{
        this.dataSource=new MatTableDataSource<ProductInterface>(data);
        this.dataSource.paginator=this.paginator;
      },
      error=>{
        console.log(error);
      }
    );
  }

  getRecordRow(row){
    console.log(row);
    this.router.navigate([`/newProduct/${row.id}`]);
  }

}