import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
interface VoteCardProps {
  candidateName: string;
  partyName: string;
  partyIcon: string;
  votes: number;
}
const VoteCard = ({
  candidateName,
  partyName,
  partyIcon,
  votes,
}: VoteCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
          <AntDesign
            name={partyIcon}
            size={40}
            color="#333"
            style={styles.icon}
          />
        <View style={styles.info}>
          <Text style={styles.candidateName}>{candidateName}</Text>
          <Text style={styles.partyName}>{partyName}</Text>
        </View>
      </View>
      <View style={styles.voteContainer}>
        <Text style={styles.voteLabel}>Votes:</Text>
        <Text style={styles.voteCount}>{votes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#dfdfdf", // white background
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2, // Android shadow
    shadowColor: "#fff", // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    width: 340, // adjust as needed
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  candidateName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  partyName: {
    fontSize: 14,
    color: "#666",
  },
  voteContainer: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  voteLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  voteCount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // brand color for vote count
  },
});

export default VoteCard;
