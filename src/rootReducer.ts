import { combineReducers } from "redux"
import HomeReducer from "./Home/reducer"

export default combineReducers({
  Home: HomeReducer
  // mapStateToPropsでstate.home.fooなどと参照できる
})
