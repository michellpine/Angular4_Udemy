import { Component } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
    selector: 'app-courses',
    template: `
    {{ text | summary }}
    `
})

export class CoursesComponent {
    text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar erat eu dolor cursus, vel ultrices dui suscipit. Proin a ultrices lacus, at pretium nulla. Vestibulum commodo imperdiet mollis. Suspendisse id augue eleifend arcu finibus lacinia. Sed lobortis vehicula sollicitudin. Sed non ligula rhoncus, molestie metus eu, varius lorem. Praesent fringilla, lectus at pharetra pretium, elit massa elementum justo, nec consequat velit felis porta sem. Nunc quis velit eu eros luctus suscipit. Pellentesque pretium blandit nisi, sit amet tempus ipsum semper at. Sed dignissim tincidunt accumsan. Suspendisse pellentesque luctus purus imperdiet laoreet. Nullam suscipit ligula vel arcu mollis, eget laoreet orci suscipit. Fusce id tortor ut justo mollis tincidunt maximus sed erat. Curabitur vitae tempor ante. Nam id nisi non lacus euismod dictum. Nullam sollicitudin nec quam eget posuere. In venenatis rutrum imperdiet. Nulla purus velit, euismod id ultricies rutrum, facilisis a urna.`;
}

