import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, Text, TextInput, View } from "react-native-web";
import Button from "../../components/button";


export default function Index(){
    const[text, setText] = useState("");
    const[value, setValue] = useState("");

    return(
        <SafeAreaView style={styles.conteiner}>
            <View style={styles.conteinerItens}>
                <Text style={styles.text}>Descrição</Text>
                <TextInput 
                value={text} 
                onChangeText={setText}
                style={styles.input}
                >
                </TextInput>
            </View>
            <View style={styles.conteinerItens}>
                <Text style={styles.text}>Valor</Text>
                <TextInput 
                value={value} 
                onChangeText={setValue}
                style={styles.input}
                keyboardType="number"
                >
                </TextInput>
            </View>
            <Button />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        alignItems: "center",
    }, 
    conteinerItens:{
        margin: 10
    },
    text: {
        color: "#5A5A5A",
        marginBottom: 5
    },
    input:{
        width: 320,
        height: 46,
        borderRadius: 10,
        paddingHorizontal: 16,
        borderColor:"#D9D9D9",
        borderWidth: 1,
        flexGrow:1,
      },
})