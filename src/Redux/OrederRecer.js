

const stateLocal = JSON.parse(localStorage.getItem("state"))
let initialStateOrder = {};
initialStateOrder = stateLocal ? JSON.parse(localStorage.getItem("state")) : {
    items:[],
    itemsCount: 0,
    priceTotal: 0,
    location: { lat: 0, long: 0}
};

const orderReducer = (state = initialStateOrder, action) => {

    switch(action.type) {
      case 'ADD_ITEM':
        
        // const stateresult = 
        let stateresult = Object.assign({},state);
        stateresult = {
            ...stateresult,
            itemsCount: stateresult.itemsCount + 1,
            items: state.items.concat([action.form]),
            priceTotal: state.priceTotal + action.form.price
        };
        localStorage.setItem("state", JSON.stringify(stateresult));
        return stateresult;
        case 'GET_ITEMS_COUNT':
            return state.itemsCount;

        case 'LOCATING':
          
            const location = action.payload.location
            console.log(location)
            return {
              ...state,
              location:location
            };
      default:
        return state;
    }
  }
  console.log(initialStateOrder)
  export default orderReducer;