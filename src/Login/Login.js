import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Login.styles'

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Uyarı', 'Kullanıcı adı ve şifre alanları boş bırakılamaz.');
      return;
    }

    try {
      // Kullanıcının kayıt olduğu bilgileri AsyncStorage'den alalım
      const savedUsername = await AsyncStorage.getItem('savedUsername');
      const savedPassword = await AsyncStorage.getItem('savedPassword');

      // Girilen kullanıcı adı ve şifre ile kaydedilen bilgileri karşılaştıralım
      if (savedUsername === username && savedPassword === password) {
        // Giriş başarılı
        console.log('Giriş yapıldı:', username);
        // Diğer işlemleri burada yapabilirsiniz
        navigation.navigate('TicketScreen');
      } else {
        // Kullanıcı adı veya şifre hatalı
        Alert.alert('Hata', 'Kullanıcı adı veya şifre hatalı.');
        return;
      }
    } catch (error) {
      console.error('Hata:', error);
      Alert.alert('Hata', 'Bir hata oluştu, lütfen tekrar deneyin.');
    }
    navigation.navigate('TicketScreen')
  };

  const handleRegister = () => {
    // Kayıt işlemleri burada gerçekleştirilebilir
    console.log('Kayıt ol tıklandı');
  };

  function SignUp(){
    navigation.navigate('SignUpScreen')
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş geldiniz! Yolculuğa başlamaya hazır mısınız?</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    <View style={styles.button}>
    <Button title="Giriş Yap" onPress={handleLogin}  />
    <Button title="Kayıt Ol" onPress={SignUp} />
    </View>
    </View>
  );
};


export default Login;
