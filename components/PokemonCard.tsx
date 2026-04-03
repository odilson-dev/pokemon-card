import { Image, Platform, StyleSheet, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  image: any; // e.g., ReturnType<typeof require>
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}: PokemonCardProps) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}> {name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <View>
        <Image
          style={styles.image}
          source={image}
          accessibilityLabel={name}
        ></Image>
      </View>

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeText}>{type}</Text>
          <Text style={styles.typeEmoji}>{emoji}</Text>
        </View>
      </View>

      <View style={styles.moveContainer}>
        <Text style={styles.moveText}>Moves: {moves.join(", ")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weaknesses: {weaknesses.join(", ")}
        </Text>
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

  typeContainer: { marginBottom: 40, alignItems: "center" },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },

  typeText: { fontSize: 22, fontWeight: "bold" },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },

  name: {
    fontSize: 30,
  },

  hp: {
    fontSize: 22,
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: "contain",
  },

  moveContainer: {
    marginBottom: 16,
  },
  moveText: { fontSize: 22, fontWeight: "bold" },

  weaknessContainer: {
    marginBottom: 16,
  },
  weaknessText: { fontSize: 22, fontWeight: "bold" },
});
