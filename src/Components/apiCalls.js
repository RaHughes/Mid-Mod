
export const getData = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => { 
    return res.json()})
  .catch(err => console.log(err))
}