import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CoursesService } from './services/courses.service';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import {CourseResolver} from "./services/course.resolver";

@NgModule({
    declarations: [
        HomeComponent, CoursesCardListComponent, CourseComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule
    ],

    exports:[
        //HomeComponent, CoursesCardListComponent, CourseComponent
    ],
    providers: [
        CoursesService, 
        //CourseResolver
    ],
})
export class CourseAppModule {
}
