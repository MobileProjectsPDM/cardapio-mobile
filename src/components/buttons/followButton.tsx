import React from 'react';
import { Text, StyleSheet, Pressable, ButtonProps } from 'react-native';

export default function MenuButton({title,onPress}:Readonly<ButtonProps>) {

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height:61,
    width:'90%',
    borderRadius: 4,
    backgroundColor:"#fff",
    borderColor: `#E88C38`,
    borderWidth:2
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: "#E88C38",
  },
});
