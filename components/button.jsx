import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-web";


export default function Button(addTransaction){
    return(
        <Pressable
        onPress={addTransaction}
        style = {({pressed}) => [styles.button]}
    >
        <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        width: 320,
        height: 46,
        borderRadius:10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#37BF81",

      },
      buttonText: {
        fontFamily: "Inter",
        fontSize: 16,
        color: "white"
      }
})