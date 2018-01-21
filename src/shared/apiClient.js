import superagent from 'superagent'
import * as constants from "shared/constants";

const methods = ['get', 'post', 'put', 'patch', 'del'];

// function formatUrl(path){
//   return path[0] !== '/' ? `/${path}` : path;
// }

export default class ApiClient {
  constructor(){
    methods.forEach((method) => {
      this[method] = (path, {params, data} = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](path);

        if (params) {
          request.query(params);
        }

        if (data) {
          request.send(data);
        }

        // If there is a token, set the authorization header
        const token = window.localStorage.getItem(constants.API_STORAGE_KEY);
        if(token){
          request.set('Authorization', `Bearer ${token}`);
        }

        request.end((err, {body}={}) => err ? reject({body, err}) : resolve(body));
      });
    });
  }

  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty() {}
}
