import { Pipe, PipeTransform } from '@angular/core';


//**********/ /\b\w/g - Esta regex encontra:
//***********  / \b - o limite de uma palavra (início da palavra)
//***********  \w - o primeiro caractere alfanumérico da palavra
//A função de substituição pega cada match (primeira letra de cada palavra) e transforma em maiúscula.


@Pipe({
  name: 'upcaseFirstWord'
})
export class UpcaseFirstWordPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\b\w/g, char => char.toLocaleUpperCase());
  }

}
