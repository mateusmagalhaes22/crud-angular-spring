import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { CoursesDialogComponent } from '../../courses/courses-dialog/courses-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Houve um Erro ao buscar as informações da pagina!')
        return of([])
      })
    );
  }

  openDialog(courseId: string) {
    this.dialog.open(CoursesDialogComponent, {
      data: this.coursesService.findById(courseId)
    })
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
