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
    { id: 'biceps-curl', name: 'Biceps Curl', duration: 120, calories: 18 },
    { id: 'chest-press', name: 'Chest Press', duration: 60, calories: 8 }
  ];
  
  //Evevt - get fire whenever currentOngoing Execise will get changed
  exerciseChanged = new Subject<Exercise>(); 

  //Adding one more property to store COMPLETE and CANCELLED exercises.
  private exercises: Exercise[] = [] ;

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

  // Complete exercise
  completeExercise(){
    this.exercises.push(
      {...this.runningExercise, date: new Date, state:'completed'}
    )
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  //Cancel Exercise
  cancelExercise(progress: number) {
    this.exercises.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });

    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  //Get Execise history
  getCompletedOrCancelledExercises() {
    return this.exercises.slice();
  }

}
