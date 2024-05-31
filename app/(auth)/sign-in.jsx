import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
const Signin = () => {
  const [form,setForm] = useState({
    email: '',
    password: ''
  })
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
          handleChangeText={(e)=>setForm({ ...form,email:e})}
          otherStyles={styles.other}
          keyboardType="email-address"
          />
          <FormField
          title="password"
          value={form.password}
          handleChangeText={(e)=>setForm({ ...form,password:e})}
          otherStyles={styles.other}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  other:{
marginTop:7
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
