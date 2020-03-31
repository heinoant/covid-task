import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Datafetch from './components/datafetch';

export default function App() {
  //Sets the initial state for rendering
  const [showGraph, setShowGraph] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>COVID-19 Suomessa</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowGraph(false)}
        >
          <Text style={styles.buttonText}>Teksti</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowGraph(true)}
        >
          <Text style={styles.buttonText}>Graafi</Text>
        </TouchableOpacity>
      </View>
      <Datafetch showGraph={showGraph} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    position: 'absolute',
    top: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'skyblue'
  },
  buttonRow: {
    flexDirection: 'row',
    position: 'absolute',
    top: 100
  },
  button: {
    backgroundColor: 'skyblue',
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    padding: 15
  }
});
