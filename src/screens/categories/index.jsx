import React from "react";
import { styles } from "./styles";
import { View, Text, Button } from "react-native";

const Categories = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Categories</Text>
            <Button 
                title= "Productos"
                onPress={()=>{ navigation.navigate("Products")}}
                color="red"
            />
        </View>
    )
}

export default Categories;