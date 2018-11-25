import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0; 
  timer ;
  @Output() trainingExit = new EventEmitter();

  //INject MatDialog
  constructor(private dialog : MatDialog, private trainingService: TrainingService) { }
  
  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) { 
        clearInterval(this.timer); 
        this.trainingService.completeExercise();//store COmpleted Exercise
      }
    }, step);
  }

  onStop()
  {
    clearInterval(this.timer); // 1. top timer

    //2. open dialog and pass data to dialog.
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progress: this.progress, exerciseName: this.trainingService.getRunningExercise.name}
    });

    //3. Subscribe to afterClose Dialog to fetch data. it Observable as it could make call to backend.
    dialogRef.afterClosed().subscribe(
      result => {
      if (result) 
      {
        //this.trainingExit.emit();
        this.trainingService.cancelExercise(this.progress); //store cancelled Exercise
      }
      else this.startOrResumeTimer(); } //a. result callback
      // b. error callback, not needed
      // c. completion callback, not needed.
    );
  }

}
