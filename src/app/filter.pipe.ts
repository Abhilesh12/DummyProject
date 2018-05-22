import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
/*
export class FilterPipe implements PipeTransform {

  transform(registeredData: any, inputName?: any): any {

    if(inputName===undefined)
      return registeredData;
    return registeredData.filter(function (view) {
      return view.question.toLowerCase().includes(inputName.toLowerCase());
    })

  }

}
*/


export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item: any) {
      return JSON.stringify(item).toLowerCase().includes(args);

    });
  }
}
