const initialState = () => {
  return {
    code: '',
    loading: true
  };
};


export default function reducer(state=initialState(), action={}){
  switch (action.type) {
    default:
      return state;
  }
}
