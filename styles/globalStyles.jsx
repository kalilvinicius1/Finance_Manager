import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    screenContainer:{
        display: "flex", 
        flex: 1,
        alignItems: "center"
    },
    content: {
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    input:{
        width: 320,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 16,
        borderColor:"#D9D9D9",
        borderWidth: 1,
        flexGrow:1,
      },
      inputLabel: {
        color: "#5A5A5A",
        marginBottom: 5,
        fontSize: 20,
    }
})