/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {Component} from 'react'
import Home from './src/Home/HomeContainer'
import { Provider } from "react-redux"
import { store } from "./src/store"

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
