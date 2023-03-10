import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected })=> {
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.contentContainer}
                onPress={()=>onSelected(item)}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.detailsContainer}></View>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.weight}>{item.weight}</Text>    
            </TouchableOpacity>
        </View>
    );
}

export default ProductItem;