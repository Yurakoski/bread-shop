import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

const Tabs = ()=>{
    return(
        <BottomTab.Navigator initialRouteName="ShopTab">
            <BottomTab.Screen 
                name="ShopTab" 
                component={ShopNavigator} 
                options={{
                    tabBarIcon: ({ focused })=>(
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'}
                            size= {26}
                            />
                    )
                }}
                />
            <BottomTab.Screen 
                name="OrdersTab" 
                component={OrdersNavigator} 
                options={{
                    tabBarIcon: ({ focused })=>(
                        <Ionicons 
                            name={focused ? 'file-tray' : 'file-tray-outline'}
                            size= {26}
                            />
                    )
                }}
                />
            <BottomTab.Screen 
                name="CartTab" 
                component={CartNavigator} 
                options={{
                    tabBarIcon: ({ focused })=>(
                        <Ionicons 
                            name={focused ? 'cart' : 'cart-outline'}
                            size= {26}
                            />
                    )
                }}
                />
        </BottomTab.Navigator>
    )
}

export default Tabs;