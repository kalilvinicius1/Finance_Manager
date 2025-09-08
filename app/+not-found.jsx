import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import { styles } from "../styles/styles";


export default function NotFound() {
  return(
    <View style={[styles.container, {backgroundColor: "#FFFFFF"}]}>
        <Text>Error 404: Not Found</Text>
    </View>
  )
}