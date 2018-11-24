import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';

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
  constructor(private dialog : MatDialog) { }
  
  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if (this.progress >= 100) { clearInterval(this.timer); }
    }, 1000);
  }

  onStop()
  {
    clearInterval(this.timer); // 1. top timer

    //2. open dialog and pass data to dialog.
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progress: this.progress, exerciseName: "chest Press" }
    });

    //3. Subscribe to afterClose Dialog to fetch data. it Observable as it could make call to backend.
    dialogRef.afterClosed().subscribe(
      result => {
      if (result) this.trainingExit.emit();
      else this.startOrResumeTimer(); } //a. result callback
      // b. error callback, not needed
      // c. completion callback, not needed.
    );
  }

}
