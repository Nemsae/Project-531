
export default function (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_IMAGES_FULFILLED':
      return action.payload;
    // case 'FILE_UPLOAD_FULFILLED':
    //   return [...action.payload];
    default:
      return state;
  }
}
