import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout(){
    return(
        <Tabs
        screenOptions = {{
            headerStyle: {backgroundColor: "#37BF81"},
            headerTintColor: "#FFFFFF",
            headerTitle: "Transação",
            headerTitleAlign: "center",
            tabBarActiveTintColor: "#37BF81",
        }}>
            <Tabs.Screen
              name="index" 
              options={{ title: "Transações", 
              tabBarIcon: ({color}) => 
                <FontAwesome 
                  size={28} 
                  name="dollar-sign" 
                  color={color} 
                />
            }}/> 
            <Tabs.Screen
              name="resumo" 
              options={{ title: "Resumo", 
              tabBarIcon: ({color}) => 
                <FontAwesome 
                  size={28} 
                  name="dollar-sign" 
                  color={color} 
                />
            }}/> 

        </Tabs>
    )
}