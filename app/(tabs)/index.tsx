import { SectionList, StyleSheet, Text, View } from "react-native";

import groupedSectionList from "../../constants/grouped-data.json";
export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedSectionList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderSectionHeader={({ section }) => {
          return <Text style={styles.sectionHedearText}>{section.type}</Text>;
        }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f5f5f5",
  },
  sectionHedearText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },

  emptyLabel: {
    fontSize: 32,
    textAlign: "center",
  },

  headerText: {
    fontSize: 32,
    marginBottom: 32,
    textAlign: "center",
  },

  footerText: {
    fontSize: 32,
    marginBottom: 32,
    textAlign: "center",
  },
});
