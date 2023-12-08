import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    // justifyContent:"center",
    zIndex: -1,
    paddingTop: "30%",
  },
  input: {
    height: 52,
    width: "80%",
    borderRadius: 6,
    borderColor: "#000",
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 40,
    textAlign: "center",
  },
});
