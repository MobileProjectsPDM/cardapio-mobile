import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  mainTitle: {
    color: "#E88C38",
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Cor do sombreamento (preto semi-transparente)
    textShadowOffset: { width: 2, height: 2 }, // Deslocamento do sombreamento (horizontal, vertical)
    textShadowRadius: 5, // Raio do sombreamento
    fontSize: 45,
    fontWeight: "700",
    marginTop: 50,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 50,
  },
  mark: {
    color: "#E88C38",
  },
  form: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  input: {
    width: "90%",
    height: 61,
    borderRadius: 10,
    backgroundColor: "#F9F9FB",
    paddingLeft: 10,
  },
});
