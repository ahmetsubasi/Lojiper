import React from 'react';
import { View, Text, Button, } from 'react-native';
import styles from './Confirmation.style';

const Confirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ödeme Tamamlandı!</Text>
      <Text style={styles.message}>Ödemeniz başarıyla tamamlandı.</Text>
      <Text style={styles.message}>Yolculuğunuz için hazır olun.</Text>
      <Button
        title="Ana Sayfa'ya Dön"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

export default Confirmation;
