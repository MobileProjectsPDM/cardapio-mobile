import { SafeAreaView, View, TextInput, Text } from "react-native";
import { styles } from "./styles";
import LoginButton from "../../components/buttons/loginButton";
import { useNavigation } from "@react-navigation/native";
import { Line } from "../../components/LineCenter";

export function LoginPage() {
  const navigation = useNavigation();
  function handleLogin() {
    console.log("here");
    // navigation.navigate()
  }
  function doSignup() {
    navigation.navigate("Cadastro" as never);
  }
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.mainTitle}>The Menu</Text>
      <Text style={styles.subTitle}>Realize o Login</Text>
      <Line />
      <SafeAreaView style={styles.form}>
        <TextInput style={styles.input} placeholder="Informe seu e-mail" />
        <TextInput style={styles.input} placeholder="Digite sua senha" />
        <LoginButton title="Entrar" onPress={handleLogin} />
      </SafeAreaView>
      <Line />

      <Text style={styles.subTitle} onPress={doSignup}>
        Não possui cadastro? <Text style={styles.mark}>Clique aqui.</Text>
      </Text>
    </View>
  );
}
