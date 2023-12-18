import { SafeAreaView, View, TextInput, Text, Alert } from "react-native";
import { styles } from "./styles";
import LoginButton from "../../components/buttons/loginButton";
import { useNavigation } from "@react-navigation/native";
import { Line } from "../../components/LineCenter";
import { useState } from "react";

export function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigation();

  function handleLogin() {
    if (form.email === "" || form.password.length < 6) {
      return Alert.alert("Digite todas as informações!");
    }
  }
  function doSignup() {
    navigation.navigate("Cadastro" as never);
  }

  console.log(form);

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.mainTitle}>The Menu</Text>
      <Text style={styles.subTitle}>Realize o Login</Text>
      <Line />
      <SafeAreaView style={styles.form}>
        <TextInput
          value={form.email}
          onChangeText={(email) => setForm({ ...form, email })}
          style={styles.input}
          placeholder="Informe seu e-mail"
        />
        <TextInput
          value={form.password}
          style={styles.input}
          onChangeText={(password) => setForm({ ...form, password })}
          keyboardType="numeric"
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <LoginButton title="Entrar" onPress={handleLogin} />
      </SafeAreaView>
      <Line />

      <Text style={styles.subTitle} onPress={doSignup}>
        Não possui cadastro? <Text style={styles.mark}>Clique aqui.</Text>
      </Text>
    </View>
  );
}
