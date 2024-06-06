import { StyleSheet, Text, View, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/customButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username:""
  });
  const [isSubmitting,setIsSubmitting] = useState(false)
  const submit =async () => {
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error','Please fill in all the fields')
    }

    setIsSubmitting(true)
    try{
const result = await createUser(form.email,form.password,form.username)
      
//set it to global

router.replace('/home')
}catch(error){
     Alert.alert('Error',error.message)
    }finally{
      setIsSubmitting(false)
    }
    // createUser();
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <Image
            style={styles.logo}
            source={images.logo}
            resizeMode="contain"
          />
          <Text style={styles.Teks}>Sign up to Aurora</Text>
          <FormField
            title="username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={styles.other}
            keyboardType="email-address"
          />
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
            title="Sign up"
            handlePress ={submit}
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
            <Text style={{color:'#fff',fontFamily:'Poppins-Regular'}}>have an account already?</Text>
           <Link href={'/sign-in'} style={{fontFamily:'Poppins-SemiBold', marginLeft: 8, color: "#F59E0B", fontWeight: "600" }}>
            Sign in
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

export default Signup;

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
