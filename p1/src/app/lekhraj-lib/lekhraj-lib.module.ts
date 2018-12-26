import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDir1Directive } from './common/input-dir1.directive';
import { FaInputComponent } from './fa-input/fa-input.component';


@NgModule({
    declarations: [FaInputComponent, InputDir1Directive],
    imports: [
        CommonModule
    ],
    exports: [FaInputComponent, InputDir1Directive]
})
export class LekhrajLibModule { }