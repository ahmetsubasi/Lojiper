import React, { useState } from 'react';
import { View, 
  Text, 
  TextInput, 
  Button, 
  Alert, 
} from 'react-native';
import styles from './SignUp.styles';

const SignUp = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userId, setUserId] = useState('');
  const [userDate, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    if (!userName || !userSurname || !userId || !userDate || !password || !passwordAgain || !email) {
      Alert.alert('Lütfen tüm alanları doldurun.');
      return;
    }

    if (password !== passwordAgain) {
      Alert.alert('Şifreler uyuşmuyor.');
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Soyadı"
        value={userSurname}
        onChangeText={setUserSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="T.C Kimlik"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="Doğum Tarihi"
        value={userDate}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre Tekrarı"
        secureTextEntry
        value={passwordAgain}
        onChangeText={setPasswordAgain}
      />
     <View style={styles.btn} >
     <Button title="Kayıt Ol" 
     onPress={handleSignUp} 
     />
     </View>
    </View>
  );
};

export default SignUp;
