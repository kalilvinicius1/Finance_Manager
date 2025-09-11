import { StyleSheet, TouchableHighlight } from "react-native";
import { Text } from "react-native-web";


export default function Button({onPress}){
    return(
        <TouchableHighlight 
            style={styles.button} 
            onPress={(onPress)}>
            <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        height: 44,
        borderRadius:10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#37BF81",

      },
      buttonText: {
        fontSize: 18,
        fontWeight: 600,
        color: "white"
      }
})