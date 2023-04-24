export const api = async (page: number) => {
  fetch(`http://localhost:3001/api/${page}`)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => console.error(error));
}