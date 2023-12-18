import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LandPage } from "../screens/landpage";
import { LoginPage } from "../screens/login";
import { SignUp } from "../screens/signUp";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="Tela Inicial" component={LandPage}/>
        <Stack.Screen name="Home" component={LoginPage} />
        <Stack.Screen name="Cadastro" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
