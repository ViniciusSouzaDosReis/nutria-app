import { View, Text, TextInput } from "react-native"

import styles from './style'

const Input = ({ value, placeholder, setValue, label, secureTextEntry}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={text => setValue(text)}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export { Input }