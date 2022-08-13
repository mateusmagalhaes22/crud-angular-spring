import { Course } from './../model/course';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Course) {}

  ngOnInit(): void {
  }

}
