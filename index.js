import './app-user.js'
import { getUsers } from './usersApi.js'

window.addEventListener('load', () => {
  fetchUsers()
  regisetrSW()
})

async function fetchUsers() {
  const users = await getUsers()

  const main = document.querySelector('main')
  users.forEach(user => {
    const el = document.createElement('app-user')
    el.user = user
    main.appendChild(el)
  })
}

async function regisetrSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js')
    } catch (e) {
      console.error('SW registration failed')
    }
  }
}
