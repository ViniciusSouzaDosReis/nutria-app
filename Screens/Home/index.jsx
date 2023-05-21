import { ScrollView, View, Text, Image } from "react-native"
import styles from "./style"

import { CardUserInfo } from "./Components/CardUserInfo"
import { CardFood } from "./Components/CardFood"
import { CardExercice } from "./Components/CardExercice"
import { MenuBar } from "../../Components/MenuBar"

const Home = () => {
  const URL_ICON = '../../public/icons/userIcon.png'

  return (
    <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView style={styles.HomeContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.sectionLogo}>
            <Text style={styles.textLogo}>
              nutrI.A
            </Text>
            <Image source={require(URL_ICON)} />
          </View>
          <View style={styles.sectionWelcome}>
            <Text style={styles.title}>Ola!</Text>
            <Text style={styles.userName}>Leonardo Bragatti</Text>
          </View>
        </View>
        <CardUserInfo />
        <View>
          <Text style={styles.sectionText}>Suas refeições de hoje</Text>
        </View>
        <ScrollView style={styles.sectionMeals} horizontal={true} contentContainerStyle={{ columnGap: 16 }}>
          <CardFood />
          <CardFood />
        </ScrollView>
        <View>
          <Text style={styles.sectionText}>Suas refeições de hoje</Text>
        </View>
        <ScrollView style={styles.sectionMeals} horizontal={true} contentContainerStyle={{ columnGap: 16 }}>
          <CardExercice />
          <CardExercice />
        </ScrollView>
      </ScrollView>
      <MenuBar />
    </View>
  )
}

export { Home }