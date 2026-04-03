import PokemonCard from "@/components/PokemonCard";
import { StyleSheet, View } from "react-native";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("../../assets/images/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  return (
    <View style={styles.container}>
      <PokemonCard {...charmanderData} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f5f5f5",
  },
});
