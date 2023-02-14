import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const CartItem = ({ item, onDelete }) =>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
                <Text style={styles.price}>Precio: ${item.price}</Text>
            </View>
            <TouchableOpacity onPress={()=> onDelete(item.id)}>
                <Ionicons name='trash' size={26}/>
            </TouchableOpacity>
        </View>
    )
}

export default CartItem;