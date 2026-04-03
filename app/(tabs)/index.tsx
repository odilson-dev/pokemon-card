import PokemonCard from "@/components/PokemonCard";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <PokemonCard />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f5f5f5",
  },
});
