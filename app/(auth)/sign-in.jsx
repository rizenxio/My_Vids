import { StyleSheet, Text, View, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/customButton";
import { Link,router } from "expo-router";
import { signIn } from "../../lib/appwrite";
const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);

      //set it to global

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
    // createUser();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <Image
            style={styles.logo}
            source={images.logo}
            resizeMode="contain"
          />
          <Text style={styles.Teks}>Log in to Aurora</Text>
          <FormField
            title="email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.other}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.other}
          />
          <CustomButton
            title="Sign in"
            handlePress={submit}
            containerStyles={styles.other}
            isLoading={isSubmitting}
          />
          <View
            style={{
              justifyContent: "center",
              paddingTop: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" }}>
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              style={{
                fontFamily: "Poppins-SemiBold",
                marginLeft: 8,
                color: "#F59E0B",
                fontWeight: "600",
              }}
            >
              Sign up
            </Link>
            {/* <Text
              style={{fontFamily:'Poppins-Regular', marginLeft: 8, color: "#F59E0B", fontWeight: "600" }}
            >
              Sign up
            </Text> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  TextAcc: {},
  other: {
    marginTop: 7,
  },
  Teks: {
    marginTop: 40,
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#fff",
  },
  logo: {
    width: 115,
    height: 35,
  },
  container: {
    flex: 1,
    height: "full",
    backgroundColor: "#161622",
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: 4,
    marginLeft: 6,
  },
});
