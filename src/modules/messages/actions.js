import generateUUID from 'shared/generateUUID';

export const ADD_MESSAGE = 'messages/ADD_MESSAGE';
export const REMOVE_MESSAGE = 'messages/REMOVE_MESSAGE';

export function addMessage(content, type){
  const id = generateUUID();
  return (dispatch) => {
    setTimeout(()=>{
      dispatch(removeMessage((id)));
    }, 3000);

    dispatch({
      type: ADD_MESSAGE,
      payload: {id, content,  type}
    });
  };
}

export function removeMessage(id){
  return {
    type: REMOVE_MESSAGE,
    payload: id
  };
}

export function addErrorMessage(content){
  return addMessage(content, 'error');
}
export function addSuccessMessage(content){
  return addMessage(content, 'success');
}
export function addPrimaryMessage(content){
  return addMessage(content, 'primary');
}
