import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
    },
    footer: {
        marginBottom: 10,
        marginHorizontal: 10,
        borderTopWidth: 10,
        
    },
    buttonConfirm: {
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "gray"
    },
    buttonConfirmText: {
        fontSize: 14,
    },
    totalContainer:{
        flex: 0.4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    total:{

    }
})