export const USER_GET: string = "USER_GET";

export interface UserState {
  name: string;
}

export interface UserGet {
  type: typeof USER_GET;
  payload: string;
}

export type UserActionTypes = UserGet;
