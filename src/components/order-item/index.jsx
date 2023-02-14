import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { formatDate } from "../../utils/index";

const OrderItem = ({ item, onDelete })=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>${item.total}</Text>
                </View>
                <TouchableOpacity onPress={()=> onDelete(item,id)}> 
                    <Ionicons name="trash" size={22}></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default OrderItem;