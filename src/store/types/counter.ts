export const COUNTER_INCREASE: string = "COUNTER_INCREASE";
export const COUNTER_DECREASE: string = "COUNTER_DECREASE";

export interface CounterState {
  counter: number;
}

interface CounterIncrease {
  type: typeof COUNTER_INCREASE;
  payload: number;
}

interface CounterDecrease {
  type: typeof COUNTER_DECREASE;
  payload: number;
}

export type CounterActionTypes = CounterIncrease | CounterDecrease;
