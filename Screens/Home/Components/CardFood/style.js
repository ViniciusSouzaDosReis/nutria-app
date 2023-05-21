import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  CardContainer:{
    width: 245,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 16
  },
  imageContainer:{
    alignItems: 'center',
    position: 'relative',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#79CF76'
  },
  textContainer:{
    gap: 8,
    padding: 16
  },
  subTitle:{
    color: '#939592',
    fontSize: 12
  },
  title:{
    color: '#282C26',
    fontWeight: 'bold',
    fontSize: 16
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoText:{
    color: '#ADC178'
  }
})

export default styles