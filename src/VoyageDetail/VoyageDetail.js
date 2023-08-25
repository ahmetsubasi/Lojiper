import { View, Text, ScrollView, FlatList, TouchableWithoutFeedback, Button } from 'react-native'
import React, {useState} from 'react'
import styles from './VoyageDetail.styles'


const VoyageDetail = ({navigation}) => {

  const [flights, setFlights] = useState([
    { airline: 'Airline A', departureTime: '10:00 AM', availableSeats: [19, -20, -32, -35],  price: 50, city:'Ankara' },
    { airline: 'Airline B', departureTime: '12:00 PM', availableSeats: [15, -18, -22, -25], price: 70, city:'İzmir'  },
    { airline: 'Airline C', departureTime: '2:00 PM', availableSeats: [5, -8, -11, -14], price: 60, city:'Çanakkale' },
    { airline: 'Airline D', departureTime: '3:00 PM', availableSeats: [2, -4, -6, -10], price: 160, city:'Tekirdağ' },
    { airline: 'Airline E', departureTime: '11:00 AM', availableSeats: [1, -3, -7, -9], price: 140, city:'İzmir' },
    { airline: 'Airline F', departureTime: '13:00 PM', availableSeats: [10, -12, -14, -16], price: 180, city:'Ankara' },
    // ... Diğer seferler
  ]);

  const handleBuy = () => {
    navigation.navigate('PaymentScreen')
  }

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback>
      <View style={styles.flightCard}>
      <Text style={styles.airline}>Firma: {item.airline}</Text>
      <Text style={styles.departureTime}>Kalkış Saati: {item.departureTime}</Text>
      <Text style={styles.availableSeats}>Boş Koltuklar: {item.availableSeats}</Text>
      <Text style={styles.price}>Fiyat: {item.price} TL</Text>
      <Text style={styles.city}>Varış Noktası: {item.city}</Text>
      <Button title="Satın Al" onPress={handleBuy} />
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sefer Bilgileri</Text>
      <FlatList
        data={flights}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )  
}

export default VoyageDetail;