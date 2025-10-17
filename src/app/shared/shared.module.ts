import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AppRoutingModule } from "src/app/app-routing.module";



@NgModule({
  declarations: [
    HeaderComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
],
exports:[
  HeaderComponent
]
})
export class SharedModule { }
