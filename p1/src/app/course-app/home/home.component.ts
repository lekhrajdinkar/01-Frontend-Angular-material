import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import { map } from 'rxjs/operators';
import { COURSES } from '../model/db-data';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;
    beginnerCourses: any;
    advancedCourses: any;

    constructor(private coursesService: CoursesService) {}

    ngOnInit()
     {
        // 1. define blueprint for http REST call. Subsribed using async pkpe pipe in template.
        const courses$ = this.coursesService.findAllCourses();
        console.log(courses$);

        // 1.1. Anothor Observable - Transform using operator
        this.beginnerCourses$ = courses$.pipe(
          map(courses => courses.filter(course => course.category === 'BEGINNER') )
        );

        // 1.2. Transform using operator
        this.advancedCourses$ = courses$.pipe(
            map(courses => courses.filter(course => course.category === 'ADVANCED') )
        );

        // IF REST deos not work get it from file
        const courses_local:any = Object.values(COURSES);
        console.log(courses_local)
        this.beginnerCourses = courses_local.filter(course => course.category === 'BEGINNER');
        this.advancedCourses = courses_local.filter(course => course.category === 'ADVANCED');

        //========================


    }

}
