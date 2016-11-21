import axios from 'axios';

export function upload (file) {
  let data = new FormData();
  data.append('myfile', file);

  return {
    type: 'FILE_UPLOAD',
    payload: axios.post('/api/images', data).then(res => res.data).catch(console.error)
  };
}

export function fetchImages () {
  console.log('Sanity:');
  return {
    type: 'RECEIVE_IMAGES',
    payload: axios.get('/api/images').then((res) => res.data)
  };
}

export function uploadSuccess (image) {
  return {
    type: 'UPLOAD_SUCCESS',
    payload: image
  };
}
