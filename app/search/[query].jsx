import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { FlatList,GestureHandlerRootView, RefreshControl } from 'react-native-gesture-handler'
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";
const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPost(query));

  useEffect(() => {
    // refetch();
  }, [query]);
  return (
    <SafeAreaView style={{ backgroundColor: "#161622", flex: 1 }}>
      <FlatList
        data={posts}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.usename}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View style={styles.head}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 14,
                color: "#f7fafc",
              }}
            >
              Search Result
            </Text>

            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 24,
                color: "#fff",
              }}
            >
              {query}
            </Text>
            <View style={{ margin: 24, marginBottom: 32 }}>
              <SearchInput initialQuery={query} refetch={{refetch}} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No video found"
            subtitle="No videos found for this search "
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  head: {
    marginVertical: 24,
    paddingHorizontal: 16,
  },
});
