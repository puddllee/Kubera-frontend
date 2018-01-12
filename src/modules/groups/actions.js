export const GET_GROUPS = 'groups/GET_GROUPS';
export const GET_GROUPS_SUCCESS = 'groups/GET_GROUPS_SUCCESS';
export const GET_GROUPS_FAILURE = 'groups/GET_GROUPS_FAILURE';

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
