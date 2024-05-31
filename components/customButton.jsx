import { TouchableOpacity, Text,StyleSheet } from "react-native";
import React from "react";

const CustomBtn = () => {
  return (
    <TouchableOpacity style={styles.btnc}>
      <Text>customButton</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  btnc: {
    backgroundColor: "#ffa101",
    marginTop: 50,
    width: 327,
    height: 58,
    backgroundColor: "#ffa101",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
