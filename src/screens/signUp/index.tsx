import { View, Text, SafeAreaView, TextInput } from "react-native";
import { styles } from "./styles";
import { Line } from "../../components/LineCenter";
import LoginButton from "../../components/buttons/loginButton";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const navigation = useNavigation();

  function createAccount() {
    console.log("deu certo");
  }

  function doLogin(){
    navigation.navigate("Home" as never)
  }
  return (
    <View style={styles.signContainer}>
      <Text style={styles.mainTitle}>The Menu</Text>
      <Text style={styles.subTitle}>Realize o cadastro :)</Text>
      <Line />
      <SafeAreaView style={styles.form}>
        <TextInput style={styles.input} placeholder="Informe seu nome" />
        <TextInput style={styles.input} placeholder="Informe seu e-mail" />
        <TextInput style={styles.input} placeholder="Digite sua senha" />
        <LoginButton title="Criar Conta" onPress={createAccount} />
      </SafeAreaView>
      <Line />
      <Text style={styles.subTitle} onPress={doLogin}>
        Já é cliente? <Text style={styles.mark}>Login.</Text>
      </Text>
    </View>
  );
}
