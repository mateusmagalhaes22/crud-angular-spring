import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'frontend': return 'computer'
      case 'backend': return 'code'
      case 'tests': return 'done all'
      default: return 'category'
    }
  }
}
