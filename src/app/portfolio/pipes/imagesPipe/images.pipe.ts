// Not Works,  Working in progress Pipe that require change attributes in the back-end

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images',
})
export class ImagesPipe implements PipeTransform {
  transform(project: any): string {
    return `assets/images/${project.picture}.png`;
  }
}
