import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' }) // , pure: false
export class ReversePipe implements PipeTransform {
  transform(word: string, uppercase: boolean, postfix?: string): string {
    let reverseWord = word.split('').reverse().join('');
    reverseWord = uppercase ? reverseWord.toLocaleUpperCase() : reverseWord;
    return reverseWord + `${postfix ? '-' + postfix : ''}`;
  }
}
