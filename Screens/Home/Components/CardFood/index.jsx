import { View, Image, Text } from "react-native"
import styles from "./style"

const CardFood = () =>{
  const URL_BACKGROUND_IMAGE = '../../../../public/images/Wormies_Breakfast.png'

  return(
    <View style={styles.CardContainer}>
      <View style={styles.imageContainer}>
        <Image source={require(URL_BACKGROUND_IMAGE)}/>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.subTitle}>Café da manhã</Text>
          <Text style={styles.title}>Ovão Bolado</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>200 kcal</Text>
          <Text style={styles.infoText}>30 min</Text>
          <Text style={styles.infoText}>1 kg</Text>
        </View>
      </View>
    </View>
  )
}

export { CardFood }