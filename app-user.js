class AppUser extends HTMLElement {
  set user(user) {
    this.innerHTML = `
      <p>${user.name} ${user.email}</p>
    `
  }
}

customElements.define('app-user', AppUser)
