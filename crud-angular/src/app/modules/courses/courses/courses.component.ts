import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
  ];
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
