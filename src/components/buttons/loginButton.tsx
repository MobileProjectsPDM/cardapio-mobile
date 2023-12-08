import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void | undefined;
};

export default function LoginButton({ title, onPress }: Readonly<ButtonProps>) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 61,
    width: "90%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: `#E88C38`,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
