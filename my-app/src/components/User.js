import React from "react"
const User = ({ user }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ marginRight: "20px" }}>{user.firstName}</div>
      <button>Delete</button>
    </div>
  )
}

export default User
