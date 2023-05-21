import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionForm: {
    position: 'relative',
    bottom: 30,
    height: 550,
    padding: 16,
    backgroundColor: 'white',
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    zIndex: 99,
  },
  textContainer: {
    gap: 8,
    alignItems: 'center'
  },
  title: {
    color: '#282C26',
    fontSize: 32,
    fontWeight: 'bold'
  },
  text: {
    color: '#939592',
    textAlign: 'center'
  },
  inputContainer: {
    gap: 8
  },
  buttonsContainer:{
    marginTop: 16,
    gap: 8
  }
})

export default styles