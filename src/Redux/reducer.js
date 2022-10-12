const initState = {
  items : [],
  page : 1,
  loading : false,
  err : null
}

function itemReducer(state = initState, action){
  switch (action.type) {
      case "FETCH_ITEMS_SUCCESS":
          return{
              ...state, items : [...state.items, ...action.payload.data],
          }
      case "FETCH_ITEMS_FAIL":
          return {
              ...state, err : action.payload.err
          }
      case "SET_PAGE" : 
          return {
              ...state, page : action.payload
          }
        case "SET_LOADING" :
            //   console.log("set loading  " + action.payload); 
          return {
              ...state,  loading : action.payload
          }
      default:
          return {...state};
  }
}

export default itemReducer;