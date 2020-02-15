import {
  CounterActionTypes,
  COUNTER_INCREASE,
  COUNTER_DECREASE
} from "@src/store/types/counter";

export function counterIncrease(x: number): CounterActionTypes {
  return {
    type: COUNTER_INCREASE,
    payload: x
  };
}

export function counterDecrease(x: number): CounterActionTypes {
  return {
    type: COUNTER_DECREASE,
    payload: x
  };
}
