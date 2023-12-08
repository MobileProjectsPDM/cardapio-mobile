import { SafeAreaView, View, TextInput } from "react-native";
import { styles } from "./styles";

export function LoginPage() {
  return (
    <View style={styles.loginContainer}>
      <SafeAreaView style={styles.form}>
        <TextInput style={styles.input} placeholder="Informe seu e-mail" />
        <TextInput style={styles.input} placeholder="Digite sua senha" />
      </SafeAreaView>
    </View>
  );
}
