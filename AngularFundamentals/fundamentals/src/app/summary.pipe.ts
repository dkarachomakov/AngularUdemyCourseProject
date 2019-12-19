import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value:string, limit?: number, anotherParameterForExample?: any) {             // transform(value: any, ...args: any[])
        if(!value)
            return null;
        
        let actualLimitOfCharacters = limit ? limit : 50;
        
        return value.substr(0, actualLimitOfCharacters) + '...';
    }

}