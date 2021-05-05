import "./App.css"
import React, { useEffect } from "react"
import { getUsersRequest } from "./actions/users"
import { useDispatch, useSelector } from "react-redux"
import UsersList from "./components/UsersList"

function App() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.items)

  useEffect(() => dispatch(getUsersRequest()), [])
  return (
    <div className="App">
      <UsersList users={users} />
    </div>
  )
}

export default App
