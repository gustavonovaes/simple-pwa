const API_URL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = async () => {
  const res = await fetch(API_URL)
  return await res.json()
}

export { getUsers }
