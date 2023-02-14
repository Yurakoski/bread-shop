import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import { CART } from "../../constants/data/index"
import CartItem from "../../components/cart-item";

const Cart = ({ navigation })=>{

    const onDelete = ({ id })=> {};
    const renderItem= ({ item })=> <CartItem item={item} onDelete={onDelete} />
    const keyExtractor = (item)=> item.id.toString();
    const total= 50;

    return(
        <View style={styles.container}>
            <View style={styles.listContainer}>
            <FlatList
                style={styles.listContainer}
                data={CART}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.buttonConfirm}
                    onPress={()=> null}>
                <Text style={styles.buttonConfirmText}>Confirmar</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.total}>Total: </Text> 
                    <Text style={styles.total}>$ {total}</Text>    
                </View>        
                </TouchableOpacity>

            </View>
        </View>
    )
};

export default Cart;