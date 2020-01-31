import { alertConstants } from '../_constants/allConstants';

export function alert(state = {}, action: any) {
  switch (action.type) {
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
        alert: true
      };
    case alertConstants.SUCCESS:
      return {
        alert: false
      }
    default:
      return state
  }
}