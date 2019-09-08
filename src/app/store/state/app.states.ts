import {IState, reducer} from '../reducers/auth.reducers';


export interface AppState {
  auth: IState;
}

export const reducers = {
  auth: reducer
}
