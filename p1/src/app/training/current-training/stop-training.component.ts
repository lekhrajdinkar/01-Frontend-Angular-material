import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

// OPen this compoent as dialog from stop button of current training comp
// pass data to this component, eg: progress data ffrom current omponent to dialog token - MAT_DIALOG_DATA
// inject data from token to this comp. see at constructor.

@Component({
  selector: 'app-stop-training',
  template: ` <div fxLayout="column" fxLayoutAlign="center center">

              <h1 mat-dialog-title>Are you sure?</h1>

              <mat-dialog-content>
                <p>You already completed {{passedData.progress}}% of {{ passedData.exerciseName }}</p>
              </mat-dialog-content>

              <mat-dialog-actions>
                <button mat-button  color="primary" [mat-dialog-close]="true">Yes</button>
                <button mat-button [mat-dialog-close]="false">No</button>
              </mat-dialog-actions>
            </div> `
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: {progress:number, exerciseName:string}) {}
}
