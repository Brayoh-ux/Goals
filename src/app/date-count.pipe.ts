import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  transform(value: any): number {
    let today : Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime);

    const secondsInDay = 86400;    // 60 sec * 60 min * 24 hours
    var dateDifferenceSeconds = dateDifference * 0.001;    // convert milliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if(dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }
    else{
      return 0;
    }
  }
}
