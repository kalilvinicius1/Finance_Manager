import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { View } from "react-native-web";

export default function TabsLayout(){
    return(
        <Tabs
        screenOptions = {{
            headerStyle: {backgroundColor: "#37BF81"},
            headerTintColor: "#FFFFFF",
            headerTitleAlign: "center",
            tabBarActiveTintColor: "#37BF81",
            tabBarStyle:{
              height: 60,
              paddingTop: 5
            }
        }}>
            <Tabs.Screen
              name="index" 
              options={{ title: "Transações", 
              tabBarIcon: ({color}) => 
                <FontAwesome 
                  size={28} 
                  name="dollar" 
                  color={color} 
                />
            }}/> 
            <Tabs.Screen
              name="adicionar" 
              options={{ title: "Adicionar Transação",
              tabBarLabel:"",
              tabBarIcon: () => 
                <View style={styles.addButton}>
                  <MaterialIcons
                    size={40} 
                    name="add" 
                    color="white"
                  />
                </View>

            }}/>
            <Tabs.Screen
              name="resumo" 
              options={{ title: "Resumo", 
              tabBarIcon: ({color}) => 
              <MaterialIcons 
                name="pie-chart" 
                size={28} 
                color={color}
              />
            }}/>
        </Tabs>
    )
}

const styles = StyleSheet.create({
  addButton:{
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    height: "64px",
    width: "64px",
    borderRadius: "32px",
    borderColor: "black",
    backgroundColor: "#37BF81",
    paddingLeft: 12
  }
})