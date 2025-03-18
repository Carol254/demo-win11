import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DesktopComponent } from "./desktop/desktop.component";
import { DesktopIconsComponent } from './desktop-icons/desktop-icons.component';
import { TaskBarComponent } from './task-bar/task-bar.component';

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    DesktopComponent,
    DesktopIconsComponent,
    TaskBarComponent

  ],
  exports:[DesktopComponent,DesktopIconsComponent]
})
export class ComponentsModule{
}
