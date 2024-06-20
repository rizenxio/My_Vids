import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import {images} from '../constants'
import CustomButton from './customButton'
import { router } from 'expo-router'
const EmptyState = ({title,subtitle}) => {
  return (
    <View style={{justifyContent:'center',alignItems:"center",paddingHorizontal:24}}>
      <Image source={images.empty} style={{width:270,height:215}} resizeMode='contain'/>
     <Text style={{fontFamily:'Poppins-Medium',fontSize:14,color:'#f7fafc'}}>
       {title}
     </Text>
     <Text style={{textAlign:'center',fontFamily:'Poppins-SemiBold',fontSize:12,color:'#fff',marginTop:5}}>
       {subtitle}
     </Text>

     <CustomButton
     title="Create video"
     handlePress={()=> router.push('/create')}

     containerStyles={styles.container}
     />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:15,
        width:'100%'
    }
  })
export default EmptyState