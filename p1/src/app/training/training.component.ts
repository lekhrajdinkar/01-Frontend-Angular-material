import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {

  ongoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) {}

  //-----------------------
  ngOnInit() 
  {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      //Once execise is complete, it will return null.
      exercise => { 
        if (exercise) this.ongoingTraining = true; //if  not null
        else this.ongoingTraining = false; // if nullß
        } //Observable data
    );
  }

  ngOnDestroy(){
    this.exerciseSubscription.unsubscribe();
  }

}
