import { Pipe,PipeTransform } from '@angular/core'

@Pipe({
  name:'frontmask'
})

export class FrontMaskPipe implements PipeTransform{
  transform(phrase: string, character: number){
    let back = phrase.slice(character,phrase.length);
    let front = '';
    for ( let i=0;i<character;i++){
      front += '*';
    }
    return front.concat(back);
  }

}