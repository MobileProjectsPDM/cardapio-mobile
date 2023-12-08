import { View, Text, Image} from "react-native";
import { styles } from "./styles";
import cardapio from '../../assets/cardapio.png'

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}> The </Text>
      <Image source={cardapio} style={styles.image}/>
    </View>
  );
}
