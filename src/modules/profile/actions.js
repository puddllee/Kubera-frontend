export const GET_PROFILE = 'profile/getProfile';
export const GET_PROFILE_SUCCESS = 'profile/getProfileSuccess';
export const GET_PROFILE_FAILURE = 'profile/getProfileFailure';

export function getProfile(){
  return {
    types: [GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE],
    promise: (client) => client.get('/api/profile')
  }
}
