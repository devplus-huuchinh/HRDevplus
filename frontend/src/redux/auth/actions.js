const actions = {
   CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
   LOGIN_REQUEST: 'LOGIN_REQUEST',
   LOGOUT: 'LOGOUT',
   LOGIN_SUCCESS: 'LOGIN_SUCCESS',
   LOGIN_ERROR: 'LOGIN_ERROR',
   GET_USER_DATA_REQUEST: 'GET_USER_DATA_REQUEST',
   GET_USER_DATA_SUCCESSFUL: 'GET_USER_DATA_SUCCESSFUL',
   checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
   login: (token = false) => ({
      type: actions.LOGIN_REQUEST,
      payload: { token },
   }),
   logout: () => ({
      type: actions.LOGOUT,
   }),
   getUserDataRequest: () => ({
      type: actions.GET_USER_DATA_REQUEST,
      // payload: { loading: true },
   }),
   getUserDataSuccessful: (userData) => ({
      type: actions.GET_USER_DATA_SUCCESSFUL,
      payload: { userData },
   }),
};
export default actions;
