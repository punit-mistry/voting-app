import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VoteCard from '@/components/VoteCard';

const candidates = [
  {
    id: '1',
    candidateName: 'John Doe',
    partyName: 'Green Party',
    partyIcon: 'team', // icon name from AntDesign for example
    votes: 120,
  },
  {
    id: '2',
    candidateName: 'Jane Smith',
    partyName: 'Blue Party',
    partyIcon: 'user', // icon name from AntDesign for example
    votes: 95,
  },
  {
    id: '1',
    candidateName: 'John Doe',
    partyName: 'Green Party',
    partyIcon: 'team', // icon name from AntDesign for example
    votes: 120,
  },
  {
    id: '2',
    candidateName: 'Jane Smith',
    partyName: 'Blue Party',
    partyIcon: 'user', // icon name from AntDesign for example
    votes: 95,
  },
  {
    id: '1',
    candidateName: 'John Doe',
    partyName: 'Green Party',
    partyIcon: 'team', // icon name from AntDesign for example
    votes: 120,
  },
  {
    id: '2',
    candidateName: 'Jane Smith',
    partyName: 'Blue Party',
    partyIcon: 'user', // icon name from AntDesign for example
    votes: 95,
  },
  {
    id: '1',
    candidateName: 'John Doe',
    partyName: 'Green Party',
    partyIcon: 'team', // icon name from AntDesign for example
    votes: 120,
  },
  {
    id: '2',
    candidateName: 'Jane Smith',
    partyName: 'Blue Party',
    partyIcon: 'user', // icon name from AntDesign for example
    votes: 95,
  },
  {
    id: '1',
    candidateName: 'John Doe',
    partyName: 'Green Party',
    partyIcon: 'team', // icon name from AntDesign for example
    votes: 120,
  },
  {
    id: '2',
    candidateName: 'Jane Smith',
    partyName: 'Blue Party',
    partyIcon: 'user', // icon name from AntDesign for example
    votes: 95,
  },
  {
    id: '1',
    candidateName: 'John Doe',
    partyName: 'Green Party',
    partyIcon: 'team', // icon name from AntDesign for example
    votes: 120,
  },
  {
    id: '2',
    candidateName: 'Jane Smith',
    partyName: 'Blue Party',
    partyIcon: 'user', // icon name from AntDesign for example
    votes: 95,
  },
];

const Vote = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote</Text>
      <ScrollView>
        {candidates.map(candidate => (
          <VoteCard
            key={candidate.id}
            candidateName={candidate.candidateName}
            partyName={candidate.partyName}
            partyIcon={candidate.partyIcon}
            votes={candidate.votes}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Vote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    width: '100%',
    color: '#00FF00',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 10,
    paddingBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
});
