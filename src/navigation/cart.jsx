import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart } from '../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = ()=>{
    return(
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                backgroundColor: "white"
              },
              headerTintColor: "blue",
              headerBackTitle: '',}}>
                
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>    
    )
}

export default CartNavigator;