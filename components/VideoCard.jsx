import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { icons } from "../constants";
("react-native-web");
import {Video,ResizeMode} from 'expo-av'
//
const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 56,
      }}
    >
      <View style={{ flexDirection: "row", gap: 3, alignItems: "flex-start" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              width: 46,
              height: 46,
              borderRadius: 8, // Untuk mendekati "rounded-lg" dengan sudut bulat
              borderWidth: 1,
              borderColor: "#e79615", // Warna "border-secondary" yang sesuai
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Image
              source={{ uri: avatar }}
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              flex: 1,
              marginLeft: 3,
              marginBottom: 2,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "Poppins-SemiBold",
                fontSize: 14,
              }}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Poppins-Regular",
                color: "#bec1cc",
              }}
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>

        <View style={{ paddingTop: 2 }}>
          <Image
            source={icons.menu}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        </View>
      </View>
      {play ? (
        <Video
        source={{ uri: video }}
        style={styles.video}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        shouldPlay
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            setPlay(false);
          }
        }}
      />
      ) : (
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={()=> setPlay(true)}
        style={{width:'100%',height:240,borderRadius:20,marginTop:3,position:'relative',justifyContent:'center',alignItems:'center'}}
        >
          <Image
            source={{ uri: thumbnail }}
            style={{ width:'100%',height:'100%',borderRadius: 20, marginTop: 12 }}
            resizeMode="cover"
          />
          <Image 
          source={icons.play}
          style={{width:60,height:60,position:'absolute'}}
          resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginTop: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  }
});
