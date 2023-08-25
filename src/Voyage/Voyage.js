import React, { useState } from 'react';
import { View, 
  Text, 
  FlatList, 
  TouchableWithoutFeedback 
} from 'react-native';
import styles from './Voyage.styles';

const Voyage = ({navigation}) => {
  const [flights, setFlights] = useState([
    { id: '1', airline: 'Airline A', mission: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: '2', airline: 'Airline B', mission: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s' },
    { id: '3', airline: 'Airline C', mission: 'It has survived not only five centuries'},
    { id: '4', airline: 'Airline D', mission: 'But also the leap into electronic typesetting, remaining essentially unchanged.'},
    { id: '5', airline: 'Airline E', mission: 'It was popularised in the 1960s with the release of Letraset sheets containing'},
    { id: '6', airline: 'Airline F', mission: 'Lorem Ipsum passages'},

  ]);

  const handleSelect = () => {
    navigation.navigate('VoyageDetailScreen')
  }

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={handleSelect}>
      <View style={styles.flightCard}>
      <Text style={styles.airline}>Firma Adı: {item.airline}</Text>
      <Text style={styles.mission}>Misyonumuz: {item.mission}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sefer Listesi</Text>
      <FlatList
        data={flights}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  );
};


export default Voyage;
