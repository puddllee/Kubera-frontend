import * as constants from 'shared/constants';
import {push} from 'react-router-redux';

export const GET_TOKEN = 'auth/GET_TOKEN';
export const GET_TOKEN_SUCCESS = 'auth/GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILURE = 'auth/GET_TOKEN_FAILURE';
export const GET_PROFILE = 'profile/getProfile';
export const GET_PROFILE_SUCCESS = 'profile/getProfileSuccess';
export const GET_PROFILE_FAILURE = 'profile/getProfileFailure';


export function getToken(code){
  return (dispatch) => {
    dispatch({
      types: [GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE],
      promise: (client) => {
        return client.get(`/api/v1/auth/google/callback/?code=${code}`)
          .then((resp) => {
            window.localStorage.setItem(constants.API_STORAGE_KEY, resp.access_token);

            dispatch(getProfile(resp.access_token));

            return resp;
          });
      }
    })
  }
}


export function getProfile(){
  return (dispatch) => {
    dispatch({
      types: [GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE],
      promise: (client) => client.get('/api/v1/profile')
      // If there was an error fetching the profile,
      // boot back into login and delete the token that was being used
        .catch((err) => {
          console.log(err);
          dispatch(push('/login'))
        })
    })
  };
}
