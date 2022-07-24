import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'angular', category: 'computação/frontEnd/frameWorks'},
    { _id: '2', name: 'cypress', category: 'computação/testes/frameWorks'},
    { _id: '3', name: 'java', category: 'computação/linguagens'},
    { _id: '4', name: 'python', category: 'computação/linguagens'},
    { _id: '5', name: 'teoria musical', category: 'artes/musica'},

  ];
  displayedColumns = ['name', 'category'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
