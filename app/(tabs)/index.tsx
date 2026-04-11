import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Enter your name"
        onChangeText={setName}
      />
      <Text style={[styles.text]}> My name is {name}</Text>

      <TextInput
        style={[styles.input, styles.multiLineText]}
        multiline
        placeholder="Message"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.text}>{isDarkMode ? "Dark" : "Light"} mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text: {},
  input: {
    padding: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  multiLineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
