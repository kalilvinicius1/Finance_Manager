import { useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../components/button";
import { globalStyles } from "../../styles/globalStyles";


export default function Index(){
    const initialForm = {
        description: "",
        value: 0,
        date: "",
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)
    
    const addTransaction = () => {
        Alert.alert(`${form.description}` | `${form.value}` | `${form.date}` | `${form.category}`)
    }

    const handleCurrencyChange = (text) =>{
        const formattedValue = text.replace(/\D/g, "")
        const numberValue = formattedValue ? parseFloat(formattedValue) / 100 : 0
        
        setForm({...form, value: numberValue})
    }

    return(
        <SafeAreaView style={globalStyles.screenContainer}>
            <ScrollView style={globalStyles.content}>
                <View style={styles.form}>
                    <View>
                        <Text 
                            style={globalStyles.inputLabel}
                        >
                            Descrição
                        </Text>
                        <TextInput 
                            value={form.description} 
                            onChangeText={(text) => setForm({...form, description:text})}
                            style={globalStyles.input}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text 
                            style={globalStyles.inputLabel}
                        >
                            Valor
                        </Text>
                        <TextInput 
                            value={form.value.toLocaleString("pt-BR",{
                                style: "currency",
                                currency: "BRL"
                            })} 
                            onChangeText={handleCurrencyChange}
                            style={globalStyles.input}
                            keyboardType="numeric"
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text 
                            style={globalStyles.inputLabel}
                        >
                            Data
                        </Text>
                        <TextInput 
                            value={form.date} 
                            onChangeText={(text) => setForm({...form, date:text})}
                            style={globalStyles.input}
                            keyboardType="numeric"
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text 
                            style={globalStyles.inputLabel}
                        >
                            Categoria
                        </Text>
                        <TextInput 
                            value={form.category} 
                            onChangeText={(text) => setForm({...form, category:text})}
                            style={globalStyles.input}
                            keyboardType="number"
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Button onPress={addTransaction}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    form:{
        gap: 12,
        marginBottom: 40,
        marginTop: 10
    }
})