import { StyleSheet, Text, View,Image, Alert,FlatList,RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { FlatList,GestureHandlerRootView, RefreshControl } from 'react-native-gesture-handler'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import {LatestPost, getAllPost} from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
const Home = () => {
  const { data:posts,refetch } = useAppwrite(getAllPost)
  const { data:latesPost } = useAppwrite(LatestPost)
  const [refresing, setrefresing] = useState(false)
  const onRefresh = async() =>{
    setrefresing(true)
    //re call videos -> if any new videos
    await refetch()
    setrefresing(false)
  }
  // console.log(posts)
  return (
    <SafeAreaView style={{backgroundColor:'#161622',flex:1}}>
      <FlatList 
      data={posts}
      // data={[]}
      keyExtractor={(item) => item.$id} 
      renderItem={({item})=> (
        <VideoCard video={item}/>
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

          <Trending posts={latesPost?? [] }/>  
          </View>
        </View>
      )}
      ListEmptyComponent={()=>(
        <EmptyState 
        title="No video found"
        subtitle="be the first one to upload video"
        />
      )}
      refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
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