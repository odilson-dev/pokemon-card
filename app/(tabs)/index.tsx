import PokemonCard from "@/components/PokemonCard";
import { FlatList, StyleSheet, View } from "react-native";

export default function App() {
  const pokemons = [
    {
      name: "Charmander",
      image: require("../../assets/images/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Water", "Rock"],
    },

    {
      name: "Squirtle",
      image: require("../../assets/images/squirtle.png"), // Replace with the actual image path
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
    },

    {
      name: "Bulbasaur",
      image: require("../../assets/images/bulbasaur.png"), // Replace with the actual image path
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
    {
      name: "Pikachu",
      image: require("../../assets/images/pikachu.png"), // Replace with the actual image path
      type: "Electric",
      hp: 35,
      moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
      weaknesses: ["Ground"],
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => <PokemonCard key={item.name} {...item} />}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f5f5f5",
  },
});
