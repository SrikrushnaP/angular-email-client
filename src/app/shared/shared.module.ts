import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { SubNavComponent } from './layouts/sub-nav/sub-nav.component';
import { SideMenueComponent } from './layouts/side-menue/side-menue.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TopNavComponent, SubNavComponent, SideMenueComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    TopNavComponent, SubNavComponent, SideMenueComponent
  ]
})
export class SharedModule { }
