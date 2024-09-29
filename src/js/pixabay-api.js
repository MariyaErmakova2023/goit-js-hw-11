export function searchImages(image) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '12055450-aa2b09ec3f4cb93bdf0e9a2b1';
  const params = new URLSearchParams({
    key: API_KEY,
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 9,
  });
  const url = `${BASE_URL}?${params}`;
  console.log(url);
  return fetch(url).then(res => res.json());
  // .catch(err => {
  //   console.log(err);
  // })
}

// searchImages('dog').then(data => {
//   console.log(data);
// });
