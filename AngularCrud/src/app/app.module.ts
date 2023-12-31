import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { DataComponent } from './data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { main } from '@popperjs/core';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import {MatCardModule} from '@angular/material/card';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { AddProductComponent } from './add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ErrorComponent,
    DetailsComponent,
    CartComponent,
    ShopComponent,
  ],
  providers: [],
  bootstrap: [MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataComponent,
    BrowserAnimationsModule,
    MatTabsModule,
    AddComponent,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    NgbModule,
    MatCardModule,
    UpdateComponent,
    AddProductComponent
  ]
})
export class AppModule { }
