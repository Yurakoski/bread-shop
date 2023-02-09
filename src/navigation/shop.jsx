import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, ProductDetail, Products} from "../screens/index";

const Stack = createNativeStackNavigator();

const ShopNavigator = ()=>{
    return(
        <Stack.Navigator 
            initialRouterName="Categories"
            screenOptions={{
                headerStyle: {
                  backgroundColor: "white"
                },
                headerTintColor: "blue",
                headerBackTitle: '',
              }}
        >
            <Stack.Screen 
                name="Categories" 
                component={ Categories }
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={ Products }
                options={({ route }) =>({ 
                    title: route.params.title,
                })}
                /> 
            <Stack.Screen 
                name="ProductDetail" 
                component={ ProductDetail }
                options={({ route }) => ({ 
                    title: route.params.title,
                })}
                />
        </Stack.Navigator>
    )
}

export default ShopNavigator;