import { StyleSheet, Text, View,Image } from 'react-native'
import {Tabs,Redirect} from 'expo-router'
import {icons} from '../../constants/'
import React from 'react'
const TabIcon = ({icon,color,name,focused}) => {
  return(
    <View style={styles.iconContainer}>
      <Image 
      source={icon}
      resizeMode="contain"
      tintColor={color}
      style={{width:24,height:24}}
      />
      <Text style={[focused ? styles.textFocused : styles.textRegular, {color:color}]}>
        {name}
      </Text>
    </View>
  )
}
const TabsLayout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
      tabBarShowLabel:false,
      tabBarActiveTintColor:'#FFA001',
      tabBarInactiveTintColor:'#CDCDE0',
      tabBarStyle:{
        backgroundColor:'#161622',
        borderTopWidth:1,
        borderTopColor:'#232533',
        height:53
      }
    }}
    >
      <Tabs.Screen
      name="home"
      options={{
        title:'Home',
        headerShown:false,
        tabBarIcon:({color,focused}) => (
          <TabIcon 
          icon={icons.home}
          color={color}
          name='Home'
          focused={focused}
          />
        )
      }}
      />
       <Tabs.Screen
      name="bookmark"
      options={{
        title:'Bookmark',
        headerShown:false,
        tabBarIcon:({color,focused}) => (
          <TabIcon 
          icon={icons.bookmark}
          color={color}
          name='Bookmark'
          focused={focused}
          />
        )
      }}
      />
       <Tabs.Screen
      name="create"
      options={{
        title:'Create',
        headerShown:false,
        tabBarIcon:({color,focused}) => (
          <TabIcon 
          icon={icons.plus}
          color={color}
          name='Create'
          focused={focused}
          />
        )
      }}
      />
       <Tabs.Screen
      name="profile"
      options={{
        title:'Profile',
        headerShown:false,
        tabBarIcon:({color,focused}) => (
          <TabIcon 
          icon={icons.profile}
          color={color}
          name='Profile'
          focused={focused}
          />
        )
      }}
      />
      
    </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  tabBarstyle:{
    backgroundColor:'#161622',

  },
  iconContainer: {
    alignItems: 'center',
    justifyContent:'center',
    gap:2
  },
  icon: {
    width: 24,
    height: 24,
  },
  textFocused: {
    fontFamily: 'Poppins-SemiBold', // Sesuaikan dengan font yang Anda gunakan
    fontSize: 12,
  },
  textRegular: {
    fontFamily: 'Poppins-Regular', // Sesuaikan dengan font yang Anda gunakan
    fontSize: 12,
  },
})