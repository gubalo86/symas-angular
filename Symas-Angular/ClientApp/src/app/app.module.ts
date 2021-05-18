import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PageBlankComponent} from './layouts/pageBlank/pageBlank.component';
import { SimplePageComponent} from './layouts/pageSimple/simplePage.component';
import { PageCardedComponent } from './layouts/pageCarded/pageCarded.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.componet';

import { ProductsListComponent } from './pages/product/productsList.component';
import { NewProductComponent } from './pages/product/newProduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DemoMaterialModule} from './material-module';
import { LoginComponent } from './pages/login/login.component';
//import { ProveedoresService } from './services/proveedores/proveedores.service';

/*Routes*/
const routes:Routes=[
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'proveedores', component: ProveedorComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'newProduct/:id', component: NewProductComponent }
    ];
/*Routes*/

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PageBlankComponent,
    SimplePageComponent,
    PageCardedComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProveedorComponent,
    ProductsListComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DemoMaterialModule,
  ],
  providers: [
    //ProveedoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
