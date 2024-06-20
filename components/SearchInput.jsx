import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";
import useAppwrite from "../lib/useAppwrite";
import { searchPost } from "../lib/appwrite";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={query}
          placeholder="Search for a video topic"
          placeholderTextColor="#7b7b8b"
          onChangeText={(e) => setQuery(e)}
        />
        {/* <Image source={icons.eye} /> */}
        <TouchableOpacity
          onPress={() => {
            if (query === "")
              return Alert.alert(
                "Missing Query",
                "Please inpus something to search result across database"
              );
            if (pathname.startsWith("/search")) router.setParams({ query });
            else router.push(`/search/${query}`);
          }}
        >
          <Image
            source={icons.search}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: "#E5E7EB", // text-gray-100
    fontFamily: "Poppins-Medium",
    marginBottom: 8,
  },
  inputContainer: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#1F2937", // bg-black-100
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#374151", // border-black-200
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  textInput: {
    marginTop: 0.5,
    fontFamily: "Poppins-Regular",
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  icon: {
    width: 24, // Adjusted to a more typical icon size
    height: 24, // Adjusted to a more typical icon size
  },
});

export default SearchInput;
