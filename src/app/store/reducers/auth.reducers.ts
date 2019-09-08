import { User } from '../../models/user.model';
import { AuthTypes, AuthActionTypes } from '../actions/auth.actions';


export interface IState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
  loading: boolean;
}

export const initialState: IState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
    loading: false
};


export function reducer(state = initialState, action: AuthTypes): IState {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        loading: true
      }
    }

    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: {
          token: action.payload.token,
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
        },
        errorMessage: null
      };
    }

    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: 'Incorrect email and/or password.'
      };
    }

    case AuthActionTypes.SIGN_UP: {
      return {
        ...state,
        loading: true
      };
    }

    case AuthActionTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null
      }
    }

    case AuthActionTypes.SIGN_UP_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: 'Something went wrong.'
      }
    }

    default: {
      return state;
    }
  }
}
