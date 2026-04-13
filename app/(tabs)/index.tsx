import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [postList, setPostList] = useState([]);
  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    const data = await response.json();

    setPostList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }: any) => (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },

  titleText: {
    fontSize: 30,
  },

  bodyText: {
    fontSize: 24,
    color: "#666",
  },
});
