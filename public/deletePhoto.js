function deletePhoto(e) {
  const url = `/api/photo/${e.id}`;
  const options = {
    method: 'DELETE'
  };
  console.log(url);
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      // nada
    });
}
