import { Pressable, Text } from 'react-native';

import styles from './style'

const Button = ({ title, onPress, isSecondary }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (isSecondary) {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.TextSecondary);
  }

  return (
    <Pressable style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{title}</Text>
    </Pressable>
  )
}

export { Button }