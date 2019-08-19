/**
 *  a reducer takes in 2 things:
 * 1. the action - info about what happened
 * 2. copy of current state
 * */

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      const i = action.index;
      return [
        ...state.slice(0, i), //before the post that's going to be updated
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after the one that's updated
      ];
    default:
      return state;
  }
}

export default posts;
