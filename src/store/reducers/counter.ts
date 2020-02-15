import {
  CounterState,
  CounterActionTypes,
  COUNTER_INCREASE,
  COUNTER_DECREASE
} from "@src/store/types/counter";

const initialState: CounterState = {
  counter: 0
};

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case COUNTER_INCREASE:
      return {
        ...state,
        counter: action.payload
      };
    case COUNTER_DECREASE: {
      return {
        ...state,
        counter: action.payload
      };
    }
    default:
      return state;
  }
}
