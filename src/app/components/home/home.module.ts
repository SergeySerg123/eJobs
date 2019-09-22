import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from "../UI/ui.module";
import { JobPositionComponent } from './job-position/job-position.component';
import {HomeComponent} from "./home.component";
import {SidebarComponent} from "../sidebar/sidebar.component";

@NgModule({
  declarations: [JobPositionComponent, HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class HomeModule { }
