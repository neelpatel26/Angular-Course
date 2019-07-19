import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from '../model/course';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Input()
  cardIndex:Number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseViewed(){
    console.log(" Card component..Button clicked..");
    this.courseEmitter.emit(this.course);
  }

    cardClasses(){
    if(this.course.category == 'BEGINNER'){
        return 'beginner';
    }
    

    //add single style in .html page like:     [style.text-decoration]="'underline'"
    // for multiStyle.. [ngStyle]
    // cardStyles() {
    //   return{
    //       'text-decoration': 'underline'
    //   };
    // }
  }
}
