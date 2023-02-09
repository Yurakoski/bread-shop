import React from "react";
import { styles } from "./styles";
import { ProductItem } from "../../components" 
import { SafeAreaView, FlatList } from "react-native";
import { PRODUCTS } from "../../constants/data/index"

const Products = ({ navigation, route })=> {

    const {categoryId} = route.params;
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected}/>;
    const onSelected = (item) => {
        navigation.navigate('ProductDetail', { 
            productId: item.id,
            title: item.title,    
        })
    };
    const keyExtractor = (item) => item.id.toString();
    const filteredProducts = PRODUCTS.filter( (prod) => prod.categoryId === categoryId) 

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.contentList}
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    )
}

export default Products;