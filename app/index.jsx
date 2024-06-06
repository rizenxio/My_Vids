import { Button, Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect } from "expo-router";
import Logo from "../assets/images/logo.png";
import Card from "../assets/images/cards.png";
import Onboarding from '../components/Onboarding'
import { useGlobalContext } from "@/context/GlobalProvider";
export default function Index() {
  // const Btn = (()=>{
  //   return <Link href="/profile">
  //   <Text>menuju profile</Text>
  // </Link>
  // })
  const {isLoading,isLoggedIn} = useGlobalContext()

  if(!isLoading && isLoggedIn) return <Redirect href="home" />
  return (

    <View style={styles.container} >

      <Onboarding/>
    {/* <Text style={{fontSize:32, fontFamily:'Poppins-Bold'}}>Aora</Text>
    <StatusBar style="auto" />
    <Link href='/home' style={{color:'blue'}}>Go to Home</Link> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container1:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    height:'full',  
    backgroundColor: "#161622",
    alignItems: "center",
    justifyContent: "center",
  },
});
