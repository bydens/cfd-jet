import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { GridComponent } from './grid/grid.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
