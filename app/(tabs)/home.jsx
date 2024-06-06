import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList,GestureHandlerRootView } from 'react-native-gesture-handler'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
const Home = () => {
  return (
    <GestureHandlerRootView >
    <SafeAreaView style={{backgroundColor:'#161622'}}>
      <FlatList 
      data={[{id:1},{id:2},{id:3}]}
      keyExtractor={(item) => item.$id} 
      renderItem={({item})=> (
        <Text style={{fontSize:36,color:'#fff'}}>{item.id}</Text>
      )}
      ListHeaderComponent={()=>(
        <View style={styles.head}>
          <View style={{justifyContent:'space-between',alignItems:'flex-start',flexDirection:'row',marginBottom:24}}>
            <View>
              <Text style={{fontFamily:'Poppins-Medium',fontSize:14,color:'#f7fafc'}}>
                Welcome Back
              </Text>
              <Text style={{fontFamily:'Poppins-SemiBold',fontSize:24,color:'#fff'}}>
                Bahrur
              </Text>
            </View>

            <View style={{marginTop:1.5}}>
            <Image 
              source={images.logoSmall}
              style={{width:36,height:40}}
              resizeMode='contain'
            />
            </View>
          </View>

          <SearchInput/>

          <View style={{width:'100%',paddingTop:5,paddingBottom:8,flex:1}}>
          <Text style={{color:'#f7fafc',fontSize:18,fontFamily:'Poppins-Regular',marginBottom:3}}> Latest Videos</Text>

          <Trending posts={[{id:1},{id:2},{id:3}] ?? []} />  
          </View>
        </View>
      )}
      
      />
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home

const styles = StyleSheet.create({
  head:{
    marginVertical:24,
    paddingHorizontal:16,
    marginBottom:24
  }
})