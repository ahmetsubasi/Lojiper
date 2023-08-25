import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import styles from './Payment.styles'


const Payment = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handlePayment = () => {
    if (!cardNumber || !expirationDate || !cvv || !cardHolder) {
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log('Ödeme tamamlandı');
      navigation.navigate('ConfirmationScreen');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ödeme Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="Kart Numarası"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Son Kullanma Tarihi (MM/YY)"
        value={expirationDate}
        onChangeText={setExpirationDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        secureTextEntry
        value={cvv}
        onChangeText={setCVV}
      />
      <TextInput
        style={styles.input}
        placeholder="Kart Üzerindeki İsim"
        value={cardHolder}
        onChangeText={setCardHolder}
      />
      <Button title="Ödeme Yap" onPress={handlePayment} />
      {isLoading && <ActivityIndicator size="large" color="#272643" />}
    </View>
  );
};

export default Payment;
