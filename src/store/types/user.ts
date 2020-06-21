export const USER_GET = "USER_GET";

export interface UserState {
  name: string;
}

export interface UserGet {
  type: typeof USER_GET;
  payload: string;
}

export type UserActionTypes = UserGet;
