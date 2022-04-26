import actions from './actions';

const initState = {
   idToken: null,
   userData: {},
   loading: false,
};

export default function authReducer(state = initState, action) {
   switch (action.type) {
      case actions.LOGIN_SUCCESS:
         state = {
            ...state,
            idToken: action.token,
         };
         return state;
      case actions.LOGOUT:
         return initState;
      case actions.GET_USER_DATA_REQUEST:
         state = {
            ...state,
            loading: true,
         };
         return state;
      case actions.GET_USER_DATA_SUCCESSFUL:
         state = {
            ...state,
            userData: action.payload,
            loading: false,
         };
         return state;
      default:
         return state;
   }
}
