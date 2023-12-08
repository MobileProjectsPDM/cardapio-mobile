import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#2F2F3A",
    width: "100%",
    height: "40%",
    alignItems: "center",
    position: "relative",
    // justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 45,
    fontWeight: "700",
    marginVertical: 80,
  },
  image: {
    width: "60%",
    objectFit: "contain",
    position: "absolute",
    top:50
  },
});
