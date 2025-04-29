import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Login from "./screens/login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import Register from "./screens/register";
import PatientRegister from "./screens/register/patient";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Register} />
        <Stack.Screen name="Registro-Paciente" component={PatientRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
