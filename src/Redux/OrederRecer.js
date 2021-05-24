

const stateLocal = JSON.parse(localStorage.getItem("state"))
let initialStateOrder = {}
initialStateOrder = initialStateOrder ? JSON.parse(localStorage.getItem("state")) :{
    items:[],
    itemsCount: 0,
    priceTotal: 0
}

const orderReducer = (state = initialStateOrder, action) => {
    debugger
    switch(action.type) {
      case 'ADD_ITEM':
        // const stateresult = 
        let stateresult = Object.assign({},state);
        stateresult = {
            ...stateresult,
            itemsCount: stateresult.itemsCount + 1,
            items: state.items.concat([action.form]),
            priceTotal: state.priceTotal + action.form.price
        }
        localStorage.setItem("state", JSON.stringify(stateresult));
        return stateresult;
        case 'GET_ITEMS_COUNT':
            return state.itemsCount;
      default:
        return state;
    }
  }
  console.log(initialStateOrder)
  export default orderReducer;