import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    // el signo ? significa opcional
    transform(value: string, limit?: number) {
        if (!value) {
            return null;
        }
        // si limit no existe, ponga a limit como 20
        let actualLimit = (limit) ? limit : 20;
        return value.substring(0, actualLimit) + '...';
    }
}
