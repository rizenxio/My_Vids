import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/logo.png";
import Card from "../assets/images/cards.png";
import React from "react";

const Btn = () => {
  return (
    <Link href="/profile">
      <Text>menuju profile</Text>
    </Link>
  );
};

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
    
    <Image source={Logo} style={styles.Log} />
    <Image source={Card} style={styles.Cards} />
    <Text style={styles.font}>Discover Endless </Text>
    <View style={styles.textContainer}>
      <Text style={styles.font}>Possibilities with</Text>
      <Text style={styles.aoraFont}>Aora</Text>
    </View>
    <Link href="/sign-in" asChild>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTeks}>Masuk dengan email</Text>

      </TouchableOpacity>
    </Link>
    {/* <Link href="/profile">
      <Text>menuju profile</Text>
    </Link> */}
    <StatusBar backgroundColor="#161622" style="light"/>
  </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  btnTeks: {
    color: "#fff",
  },
  btn: {
    marginTop: 50,
    width: 327,
    height: 58,
    backgroundColor: "#ffa101",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#161622",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 30,
    lineHeight: 36,
  },
  aoraFont: {
    color: "#ffcc00",
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    alignSelf: "center",
    lineHeight: 36,
    marginLeft: 5,
  },
  Log: {
    width: 130,
    height: 40,
    marginTop: 0,
    marginBottom: 50,
  },
  Cards: {
    marginTop: 50,
    width: 400,
    height: 300,
    marginTop: 14,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
