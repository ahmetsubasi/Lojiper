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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Girdi arkaplan rengi
    color: '#333', // Girdi metin rengi
  },
  button:{
    flexDirection:'row-reverse',
    gap:100
  }
})