import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        height: 120,
        backgroundColor: '#FFDDA1',
      },
      item: {
        flex: 1,
        justifyContent: 'space-around',
      },
      title: {
        fontSize: 16,
      },
      detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      price: {
        fontSize: 18,
      },
      weight: {
        fontSize: 14,
      },
    });
    