import React from "react"
import User from "./User"
const UsersList = ({ users }) => {
  return (
    <div>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1
          } else if (a.firstName < b.firstName) {
            return -1
          } else {
            return 0
          }
        })
        .map((user) => (
          <User key={user.id} user={user} />
        ))}
    </div>
  )
}

export default UsersList
