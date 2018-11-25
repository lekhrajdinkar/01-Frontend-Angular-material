import { Subject } from 'rxjs';

import { Exercise } from './exercise.model';

export class TrainingService 
{
   //Current ongoing Service
  private runningExercise: Exercise;

  //All hardcoded Avilable service array
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];
  
  //Evevt - get fire whenever currentOngoing Execise will get changed
  exerciseChanged = new Subject<Exercise>(); 

  //============================================
  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  //get All exercise s
  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  //get current execise
  getRunningExercise() {
    return { ...this.runningExercise };
  }

}
