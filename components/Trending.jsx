import { View, Text } from 'react-native'
import React from 'react'
import { FlatList,GestureHandlerRootView } from 'react-native-gesture-handler'

const Trending = (posts) => {
  return (
    <GestureHandlerRootView>
    <FlatList
    data={posts}
    keyExtractor={(item)=>item.$id}
    renderItem={({item})=> (
        <Text style={{fontSize:36,color:'#fff'}}>{item.id}</Text>
    )}
    />
    </GestureHandlerRootView>
        
  )
}

export default Trending