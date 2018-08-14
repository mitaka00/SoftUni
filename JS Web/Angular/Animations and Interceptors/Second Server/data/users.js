const usersById = {}
const usersByEmail = {}

module.exports = {
  total: () => Object.keys(usersById).length,
  save: (user) => {
    const id = Object.keys(usersById).length + 1
    user.id = id
    user.roles = [];

    if (Object.keys(usersById).length === 0) {
      user.roles.push('Admin');
    }

    usersById[id] = user
    usersByEmail[user.email] = user
  },
  findByEmail: (email) => {
    return usersByEmail[email]
  },
  findById: (id) => {
    return usersById[id]
  }
}
