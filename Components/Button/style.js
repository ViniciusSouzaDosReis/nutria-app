import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: '#ADC178',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonSecondary: {
    borderWidth: 1,
    backgroundColor: 'none',
    borderColor: '#ADC178',
  },
  TextSecondary: {
    color: '#ADC178'
  }
})

export default styles