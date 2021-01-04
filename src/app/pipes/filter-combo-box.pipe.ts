import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComboBox'
})
export class FilterComboBoxPipe implements PipeTransform {

  transform(value: any, arg:any):any  {
    const results = [];
    for (const post of value) {
      if (post.departamento.indexOf(arg)>-1) {
        console.log('Sip')
      }
      
    }
  }

}
