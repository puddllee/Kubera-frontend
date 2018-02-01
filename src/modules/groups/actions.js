import {push} from 'react-router-redux';
import * as messageActions from 'modules/messages/actions';
import { routes } from 'shared/apiRoutes';

export const GET_GROUPS = 'groups/GET_GROUPS';
export const GET_GROUPS_SUCCESS = 'groups/GET_GROUPS_SUCCESS';
export const GET_GROUPS_FAILURE = 'groups/GET_GROUPS_FAILURE';
export const GET_GROUP = 'groups/GET_GROUP';
export const GET_GROUP_SUCCESS = 'groups/GET_GROUP_SUCCESS';
export const GET_GROUP_FAILURE = 'groups/GET_GROUP_FAILURE';
export const CREATE_GROUP = 'groups/CREATE_GROUP';
export const CREATE_GROUP_SUCCESS = 'groups/CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAILURE = 'groups/CREATE_GROUP_FAILURE';

export function getGroups(){
  return (dispatch) => {
    dispatch({
      types: [GET_GROUPS, GET_GROUPS_SUCCESS, GET_GROUPS_FAILURE],
      promise: (client) => {
        return client.get(routes.groups.getUserGroups());
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
        return client.post(routes.groups.createGroup(), { data })
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

export function getGroup(uid){
  return {
    types: [GET_GROUP, GET_GROUP_SUCCESS, GET_GROUP_FAILURE],
    promise: (client) => {
      return client.get(routes.groups.getGroup(uid));
    }
  }
}
