import { Types } from "../actions/users"

const INITIAL_STATE = {
  items: {},
}

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        items: action.payload,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default users
