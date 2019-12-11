
export const getData = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => {return res.json()})
  .catch(err => {return err})
}

export const postData = (newObj) => {
  const postReserve = {
    method: 'POST',
    body: JSON.stringify(newObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }
    return fetch('http://localhost:3001/api/v1/reservations', postReserve)
    .then(res => {return res.json()})
    .catch(err => {return err})
}