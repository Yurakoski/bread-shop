import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { PRODUCTS } from "../../constants/data";

const ProductDetail = ({ navigation, route }) => {

    const { productId, title } = route.params;
    const product = PRODUCTS.find((prod) => prod.id === productId);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.title}>{product.description}</Text>
            <Text style={styles.title}>{product.weight}</Text>
            <Text style={styles.title}>{product.price}</Text>
        </View>
    )
}

export default ProductDetail;