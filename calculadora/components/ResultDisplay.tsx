import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface ResultDisplayProps {
  result: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginVertical: 10,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 28,
    color: '#333',
  },
});

export default ResultDisplay;
