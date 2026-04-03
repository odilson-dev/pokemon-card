import { Platform, StyleSheet, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  image: any; // e.g., ReturnType<typeof require>
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}: PokemonCardProps) {
  return (
    <View style={styles.card}>
      <Text> {name}</Text>
      <Text>{hp}</Text>
      {/* 
      <View>
        <Image source={image} accessibilityLabel={name}></Image>
      </View> */}

      <View>
        <Text>{type}</Text>
      </View>

      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text>Weaknesses: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: { elevation: 5 },
    }),
  },
});
