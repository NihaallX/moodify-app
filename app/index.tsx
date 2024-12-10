import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moodify</Text>
      <Text style={styles.subtitle}>Discover music based on your mood</Text>

      <Button 
        title="Get Started"
        onPress={() => {
          // Add your navigation or logic here
        }}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Created by Nihal Pardeshi
        </Text>
        <Text style={styles.footerQuote}>
          "Turning emotions into melodies, one mood at a time."
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#888',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  footerQuote: {
    fontSize: 12,
    color: '#777',
    fontStyle: 'italic',
    marginTop: 5,
  },
});
