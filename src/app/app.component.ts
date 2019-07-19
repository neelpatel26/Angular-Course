import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];
  // beginnerCourse = COURSES[3];
  // securityCourse = COURSES[4];

course = COURSES[0];

  onCourseSelected(course:Course){
    console.log(" App Component..Click even..", course);
  }

}
