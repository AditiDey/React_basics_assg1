import { configureStore } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  user: {
    name: '',
    email: '',
  },
};

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = configureStore({
  reducer,
});

export default store;
