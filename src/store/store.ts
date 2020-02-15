import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { counterReducer } from "@src/store/reducers/counter";
import thunk, { ThunkAction, ThunkMiddleware } from "redux-thunk";
import { userReducer } from "./reducers/user";
import { UserActionTypes } from "@src/store/types/user";
import { CounterActionTypes } from "@src/store/types/counter";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export type State = ReturnType<typeof rootReducer>;

type Actions = UserActionTypes | CounterActionTypes;
export type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<State, Actions>),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
