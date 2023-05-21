import { View, Text, Image } from "react-native"
import styles from "./style"

const CardExercice = () => {
  const URL_BACKGROUND_IMG = '../../../../public/images/FitzPlayingSports.png'

  return(
    <View style={styles.CardExercice}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Corrida</Text>
        <Text style={styles.text}>Melhore sua saúde com a corrida! Exercício aeróbico completo que fortalece o coração, queima calorias e aumenta a resistência.</Text>
      </View>
      <View style={{position: 'relative', right: 40}}>
        <Image source={require(URL_BACKGROUND_IMG)}/>
      </View>
    </View>
  )
}

export { CardExercice }