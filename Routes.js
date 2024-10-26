import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './telas/Home';
import Cadastrar from './telas/Cadastrar';
import Login from './telas/Login';
import Tasks from './telas/Tasks';
import Perfil from './telas/Perfil';

const Stack = createStackNavigator()

export default function Routes() {
return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerBackTitle: "Voltar",
            headerBackAccessibilityLabel: "Volta para tela anteriora",
            headerStyle: {
                backgroundColor: 'rgb(60,60,60)',
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center"
        }}
        >
            <Stack.Screen 
            name="Home"
            component={Home}
            />
            <Stack.Screen 
            name="Cadastrar"
            component={Cadastrar}
            />
            <Stack.Screen 
            name="Login"
            component={Login}
            />
            <Stack.Screen 
            name="Tarefas"
            component={Tasks}
            options={{
                headerLeft: () => null,
            }}
            />
            <Stack.Screen 
            name="Perfil"
            component={Perfil}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
}