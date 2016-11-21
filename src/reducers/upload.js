
export default function (state = [], action) {
  switch (action.type) {
    case 'FILE_UPLOAD_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}
