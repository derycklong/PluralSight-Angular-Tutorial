import { Pipe } from "@angular/core";
import { Pipe, PipeTransform } from '@angular/transform';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{

  transform(value: string, character: string):string {
    return value.replace(character,' ');
  }


}
