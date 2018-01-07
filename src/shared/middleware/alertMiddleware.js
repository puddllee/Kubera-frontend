import * as actions from 'modules/messages/actions';

export default function alertMiddleware({dispatch, getState}){
  return (next) => (action) => {
    if (typeof action === 'function'){
      return action(dispatch, getState);
    }

    const {error, payload, hideError} = action;

    if(!error || hideError){
      return next(action);
    }

    dispatch(actions.addErrorMessage(payload))
  }
}
