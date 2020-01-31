import { userConstants } from '../_constants/userConstants';
import { alertActions } from './alertActions';
import { userService } from '../_services/userService';

export const userActions = {
    login
};

function login(userName, userPassword) {
    return dispatch => {
        dispatch(request({ userName, userPassword }));

        userService.login(userName, userPassword)
            .then(
                user => { 
                    dispatch(alertActions.success());
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}