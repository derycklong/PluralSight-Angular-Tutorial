import { NgModule } from '@angular/core';
import { BackMaskPipe } from './back-mask.pipe';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { FrontMaskPipe } from './front-mask.pipe';

@NgModule({
  declarations:[
    FrontMaskPipe,
    BackMaskPipe,
    ConvertToSpacesPipe
  ],

  imports:[],
  exports:[
    FrontMaskPipe,
    BackMaskPipe,
    ConvertToSpacesPipe
  ]
})

export class PipeModule {
  
}