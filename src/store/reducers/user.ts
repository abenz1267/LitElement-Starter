import { UserState, UserActionTypes, USER_GET } from "@src/store/types/user";

const initialState: UserState = {
  name: "empty"
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case USER_GET:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}
