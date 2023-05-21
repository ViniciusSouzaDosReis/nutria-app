import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

const Link = ({ title, onpress }) => {
  return (
    <TouchableOpacity onPress={onpress} style={{ alignItems: 'flex-end' }}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
}

export { Link }