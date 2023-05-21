import { View, Image, Text } from "react-native"
import styles from "./style"

const CardUserInfo = () => {
  const URL_BACKGROUND_IMAGE = '../../../../public/images/BackgroudImageCardUserInfo.png'

  return (
    <View style={styles.CardContainer}>
      <View style={styles.infoContainer}>
        <View style>
          <Text style={styles.title}>
            Suas Calorias Perdidas
          </Text>
          <Text style={styles.numersText}>3,485 <Text style={styles.kcal}>KCAL</Text></Text>
        </View>
        <View>
          <Text style={styles.title}>
            Exercícios Praticados
          </Text>
          <Text style={styles.numersText}>30</Text>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 0}}>
        <Image
          source={require(URL_BACKGROUND_IMAGE)}
        />
      </View>
    </View>
  )
}

export { CardUserInfo }