import Box from "@/components/Box";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "plum", alignSelf: "flex-start" }}>
        Box 1
      </Box>
      <Box style={{ backgroundColor: "blue" }}>Box 2</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 3</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 4</Box>
      <Box style={{ backgroundColor: "green" }}>Box 5</Box>

      <Box style={{ backgroundColor: "orange" }}>Box 6</Box>
      <Box style={{ backgroundColor: "black" }}>Box 7</Box>

      <Box style={{ backgroundColor: "orange" }}>Box 6</Box>
      <Box style={{ backgroundColor: "black" }}>Box 7</Box>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: "white",

    alignItems: "flex-end",

    borderWidth: 6,
    borderColor: "red",
  },
});
