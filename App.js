import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={require('./assets/profile.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>Sruthi Johnson</Text>
        <Text style={styles.subHeader}>Full-Stack Developer</Text>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Contact Info</Text>
          <Text>Email: sruthijohnsonofficial@gmail.com</Text>
          <Text>Phone: +1-431-792-2883</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Interests</Text>
          <Text>- Coding</Text>
          <Text>- Reading</Text>
          <Text>- Listen to Music</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Professional Skills</Text>
          <Text>- SQL</Text>
          <Text>- JavaScript</Text>
          <Text>- React Native</Text>
          <Text>- UI/UX Design</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf7ff',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginTop: 20,
    width: '100%',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007acc',
  },
});
