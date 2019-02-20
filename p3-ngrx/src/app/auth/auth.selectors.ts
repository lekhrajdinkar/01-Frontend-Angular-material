import {createSelector} from '@ngrx/store';

//Function and its exported as well ?
export const selectAuthState = (state) => { return state.auth; }

//these selectoor are memorized and use the memory result untill value of input arg in changed.
export const isLoggedIn = createSelector(
  selectAuthState, // could add multiple  selector function in comma sepeareted way.
  auth => auth.loggedIn // last arg is called projector function.
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
