import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images',
})
export class ImagesPipe implements PipeTransform {
  transform(project: any): string {
    return `assets/images/${project.picture}.png`;
  }
}
