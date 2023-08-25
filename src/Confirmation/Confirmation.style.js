import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold', // Metin kalınlaştırma
    color: '#333', // Metin rengi
      },
  message: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
})