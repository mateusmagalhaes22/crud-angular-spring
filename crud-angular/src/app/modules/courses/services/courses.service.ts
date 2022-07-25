import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

    list(): Course[] {
      return [
        { _id: '1', name: 'angular', category: 'computação/frontEnd/frameWorks'},
        { _id: '2', name: 'cypress', category: 'computação/testes/frameWorks'},
        { _id: '3', name: 'java', category: 'computação/linguagens'},
        { _id: '4', name: 'python', category: 'computação/linguagens'},
        { _id: '5', name: 'teoria musical', category: 'artes/musica'}
      ];
    }

}
