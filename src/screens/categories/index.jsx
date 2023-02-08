import React from "react";
import { styles } from "./styles";
import { View, FlatList } from "react-native";
import { CATEGORIES } from "../../constants/data/index";
import { CategoryItem } from "../../components";
const Categories = ({ navigation }) => {
    
    const onSelected = ( item ) => {
        navigation.navigate(
            'Products', 
            {
                categoryId: item.id,
                title: item.title
            })
    }
    const renderItem = ({ item }) => <CategoryItem item={ item } onSelected={ onSelected }/>
    const keyExtractor = ( item ) => item.id.toString();
    return(
        <View style={styles.container}>
            <FlatList
                style={styles.containerList}
                data={CATEGORIES}
                renderItem={renderItem}    
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

export default Categories;