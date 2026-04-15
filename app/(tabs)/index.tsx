import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const SkeletonCard = () => {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.8, { duration: 800 }),
        withTiming(0.3, { duration: 800 }),
      ),
      -1,
      true,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={[styles.card, { borderColor: "#e0e0e0" }]}>
      <Animated.View style={[styles.skeletonTitle, animatedStyle]} />
      <View style={{ gap: 8 }}>
        <Animated.View style={[styles.skeletonBody, animatedStyle]} />
        <Animated.View
          style={[styles.skeletonBody, animatedStyle, { width: "80%" }]}
        />
      </View>
    </View>
  );
};

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  const handleAddPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        },
      );

      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setPostBody("");
    } catch (error) {
      console.error("Error adding post:", error);
      setError("Failed to add post");
    } finally {
      setIsPosting(false);
    }
  };

  const fetchData = async (limit = 10) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );
      const data = await response.json();
      setPostList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch post list");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Post Body"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? "Posting..." : "Add Post"}
              onPress={handleAddPost}
              disabled={isPosting}
            />
          </View>
          <View style={styles.listContainer}>
            {isLoading ? (
              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={() => <SkeletonCard />}
                keyExtractor={(item) => item.toString()}
              />
            ) : (
              <FlatList
                data={postList}
                renderItem={({ item }: any) => (
                  <View style={styles.card}>
                    <Text style={styles.titleText}>
                      {item.title} #{item.id}
                    </Text>
                    <Text style={styles.bodyText}>{item.body}</Text>
                  </View>
                )}
                ListHeaderComponent={
                  <Text style={styles.headerTitle}>Recent Posts</Text>
                }
                ListFooterComponent={
                  <Text style={styles.headerTitle}>End of the posts</Text>
                }
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                keyExtractor={(item: any) => item.id.toString()}
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    color: "#4a4a4a",
    lineHeight: 24,
  },
  skeletonTitle: {
    height: 28,
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
    marginBottom: 12,
    width: "70%",
  },
  skeletonBody: {
    height: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    width: "100%",
  },

  inputContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 16,
    borderWidth: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    paddingBottom: 8,
  },

  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },

  errorText: {
    fontSize: 16,
    color: "#4a4a4a",
    lineHeight: 24,
  },
});
