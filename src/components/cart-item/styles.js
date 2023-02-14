import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,    
        height: 120,
        borderRadius: 5,
        borderColor: "green",
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "yellow",
        marginTop: 10,
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 5
    },
    headerContainer: {
         
    },
    title: {

    },
    quantity: {

    },
    price: {
        fontSize: 16,
        fontStyle: "bold",
    },
})