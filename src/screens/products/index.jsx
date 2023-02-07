import React from "react";
import { styles } from "./styles";
import { View, Text, Button } from "react-native";

const Products = ({ navigation })=> {
    return(
        <View style={styles.container}>
            <Text>Products</Text>
            <Button 
                title= "Detalle"
                onPress={()=> navigation.navigate("ProductDetail")}
                color="red"
            />
        </View>
    )
}

export default Products;