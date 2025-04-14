import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder || "0"}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    fontSize: 24,
    marginVertical: 10,
    borderRadius: 8,
    textAlign: 'right',
  },
});

export default InputField;
