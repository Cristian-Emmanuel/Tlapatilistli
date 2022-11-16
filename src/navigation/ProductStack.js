import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Product/Home";
import Product from "../screens/Product/Product";
import colors from "../styles/colors";
import { StackView } from "react-navigation-stack";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.bgDark },
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="product"
        component={Product}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
