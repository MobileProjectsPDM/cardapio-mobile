import { View, Text, SafeAreaView, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { Line } from "../../components/LineCenter";
import LoginButton from "../../components/buttons/loginButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function SignUp() {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function createAccount() {
    if(form.email === "" || form.name === "" || form.password.length < 6){
        return (Alert.alert("Digite todas as informações!"))
    }
  }

  function doLogin() {
    navigation.navigate("Home" as never);
  }
  return (
    <View style={styles.signContainer}>
      <Text style={styles.mainTitle}>The Menu</Text>
      <Text style={styles.subTitle}>Realize o cadastro :)</Text>
      <Line />
      <SafeAreaView style={styles.form}>
        <TextInput
          value={form.name}
          onChangeText={(name) => setForm({ ...form, name })}
          style={styles.input}
          placeholder="Informe seu nome"
        />
        <TextInput
          value={form.email}
          onChangeText={(email) => setForm({ ...form, email })}
          style={styles.input}
          placeholder="Informe seu e-mail"
        />
        <TextInput
          value={form.password}
          onChangeText={(password) => setForm({ ...form, password })}
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <LoginButton title="Criar Conta" onPress={createAccount} />
      </SafeAreaView>
      <Line />
      <Text style={styles.subTitle} onPress={doLogin}>
        Já é cliente? <Text style={styles.mark}>Login.</Text>
      </Text>
    </View>
  );
}
