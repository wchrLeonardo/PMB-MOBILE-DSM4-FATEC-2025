import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface OperatorButtonProps {
  operator: string;
  onPress: () => void;
}

const OperatorButton: React.FC<OperatorButtonProps> = ({ operator, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{operator}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4c4cff',
    padding: 20,
    borderRadius: 10,
    margin: 8,
    width: 70,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OperatorButton;
