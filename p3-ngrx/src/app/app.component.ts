import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers';
import {Logout} from './auth/auth.actions';
import {map} from 'rxjs/operators';
import {isLoggedIn, isLoggedOut} from './auth/auth.selectors';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;

    isLoggedOut$: Observable<boolean>;


    constructor(private store: Store<AppState>, private router: Router) {

    }

    ngOnInit() {

      this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn) 
          //Select operate check the data with previous state ans wont emit anything if  there is no differecnce  with previous data.
          //select operator  is eliminating the duploacte for this  observable.
          //.map( state => state.auth.isLoggedIn) // older code. this is not optimized and will leazd performance issue  if  there is complex involved in calculation.
        );

      this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggedOut)
        );

    }

    logout() {

      this.store.dispatch(new Logout());

    }


}
