import { View, StyleSheet } from "react-native";

export function Line() {
  return <View style={styles.line}></View>;
}

const styles = StyleSheet.create({
  line: {
    width: "90%",
    marginVertical:20,
    height: 2,
    backgroundColor: "#E2E2E2",
  },
});
