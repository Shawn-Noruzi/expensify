import { createStore } from "redux";

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = -1} = {}) => ({
type: 'DECREMENT',
decrementBy
});

const setCount = ({count}) => ({
  type: 'SET',
  count
  });

  
const resetCount = () => ({
  type: 'RESET',
  count: 0
  });

//Reducers 
//1. are pure functions :  output determined only by its input 
//2. never changes state or action.  

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 99}));
store.dispatch({
  type: "RESET"
});
store.dispatch(setCount({count: 11991199}));
store.dispatch(resetCount());
