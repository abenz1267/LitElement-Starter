import { USER_GET } from "@src/store/types/user";
import { ThunkResult } from "@store/store";

export function userGetThunk(): ThunkResult<void> {
  return async dispatch => {
    const user: any = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    ).then(resp => resp.json());

    dispatch({
      type: USER_GET,
      payload: user.name
    });
  };
}
