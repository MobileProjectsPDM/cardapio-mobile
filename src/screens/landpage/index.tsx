import { View, Text } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/header";
import LoginButton from "../../components/buttons/loginButton";
import MenuButton from "../../components/buttons/followButton";
import { useNavigation } from "@react-navigation/native";


export function LandPage() {
  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate("Home" as never);
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <Text style={styles.mainTitle}>
          O cardápio mais completo para o seu dia!
        </Text>
        <LoginButton title="Fazer Login" onPress={handleClick} />
        <MenuButton title="Confira o Cardápio" />
      </View>
    </View>
  );
}
