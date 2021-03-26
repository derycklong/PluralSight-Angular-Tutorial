import { Pipe,PipeTransform } from '@angular/core'

@Pipe({
  name:'backmask'
})

export class BackMaskPipe implements PipeTransform{
  
  transform(phrase: string, character: number){
    let front = phrase.slice(0,phrase.length-character);
    let back='';
    for (let i=0; i<character;i++){
      back += '*';
    }
    return front.concat(back);
  }

}