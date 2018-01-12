import {push} from 'react-router-redux';
import * as messageActions from 'modules/messages/actions';

export const GET_GROUPS = 'groups/GET_GROUPS';
export const GET_GROUPS_SUCCESS = 'groups/GET_GROUPS_SUCCESS';
export const GET_GROUPS_FAILURE = 'groups/GET_GROUPS_FAILURE';
export const CREATE_GROUP = 'groups/CREATE_GROUP';
export const CREATE_GROUP_SUCCESS = 'groups/CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAILURE = 'groups/CREATE_GROUP_FAILURE';

export function getGroups(){
  return (dispatch) => {
    dispatch({
      types: [GET_GROUPS, GET_GROUPS_SUCCESS, GET_GROUPS_FAILURE],
      promise: (client) => {
        return client.get(`/api/v1/groups`);
      }
    })
  }
}

export function createGroup(group){
  // Wrap data with a group key because API makes me :(
  const data = {group};
  return (dispatch) => {
    dispatch({
      types: [CREATE_GROUP, CREATE_GROUP_SUCCESS, CREATE_GROUP_FAILURE],
      promise: (client) => {
        return client.post('/api/v1/groups/', {data})
          .then((response) => {
            dispatch(messageActions.addSuccessMessage('Group Created!'));
            dispatch(getGroups());
            dispatch(push('/groups'));
            return response;
          })
          .catch((error) => {
            dispatch(messageActions.addErrorMessage('Could not create group'));
            return error;
          });
      }
    })
  }
}
