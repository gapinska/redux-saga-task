import "./App.css"
import React, { useEffect } from "react"
import { getUsersRequest } from "./actions/users"
import { useDispatch, useSelector } from "react-redux"
import UsersList from "./components/UsersList"
import NewUserForm from "./components/NewUserForm"

function App() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.items)
  const handleSubmit = ({ firstName, lastName }) => {
    console.log(firstName, lastName)
  }

  useEffect(() => dispatch(getUsersRequest()), [])
  return (
    <div className="App">
      <div>
        <NewUserForm onSubmit={handleSubmit} />
      </div>
      {users.length && <UsersList users={users} />}
    </div>
  )
}

export default App
