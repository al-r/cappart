import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AppartList from "./components/AppartList";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

const AppNavigator = createStackNavigator(
  {
    Apparts: AppartList,
    Products: ProductList,
    Product: Product
  },
  {
    initialRouteName: "Apparts",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0054a6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'normal'
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}