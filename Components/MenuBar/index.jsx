import { View } from "react-native"
import { Octicons } from '@expo/vector-icons';

import styles from "./style"

const MenuBar = () => {
  return (
    <View style={styles.MenuBar}>
      <View style={styles.iconContainer}>
        <Octicons name="home" size={24} color="#ADC178" />
      </View>
    </View>
  )
}

export { MenuBar }