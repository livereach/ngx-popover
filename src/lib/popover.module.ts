import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Popover } from './popover.component';
import {PopoverContent} from './popover-content.component';



@NgModule({
  declarations: [Popover, PopoverContent],
  imports: [
    CommonModule
  ],
  exports: [Popover, PopoverContent]
})
export class PopoverModule { }

