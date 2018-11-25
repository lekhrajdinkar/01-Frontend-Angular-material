import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];

  //Inject Training service
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm){
    // this.trainingStart.emit();  // Invoke srv method, srv will emit event/subject.

    this.trainingService.startExercise(form.value.exercise);
  }

}
