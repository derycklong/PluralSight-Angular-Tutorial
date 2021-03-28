import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { BackMaskPipe } from '../../pipe/back-mask.pipe';
import { ConvertToSpacesPipe } from '../../pipe/convert-to-spaces.pipe';
import { FrontMaskPipe } from '../../pipe/front-mask.pipe';




@NgModule({
  declarations: [
    StarComponent,
    FrontMaskPipe,
    BackMaskPipe,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
    FrontMaskPipe,
    BackMaskPipe,
    ConvertToSpacesPipe
  ],
})
export class SharedModule { }
