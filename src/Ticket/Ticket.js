import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Alert, } from 'react-native';
import styles from './Ticket.styles';
import { SelectList } from 'react-native-dropdown-select-list'
import Checkbox from 'expo-checkbox';
import DatePicker from "expo-datepicker";
import { Entypo } from "@expo/vector-icons";

const Ticket = ({navigation}) => {


  const [selected, setSelected] = useState("");

  const data = [
    {key:'1', value:'İstanbul', disabled:true},
    {key:'2', value:'Ankara'},
    {key:'3', value:'İzmir'},
    {key:'4', value:'Bursa', disabled:true},
    {key:'5', value:'Çanakkale'},
    {key:'6', value:'Tekirdağ'}
]

const [date, setDate] = useState(new Date().toString());
const [datePicker, setDatePicker] = useState(new Date().toString());

const [isChecked, setChecked] = useState(false);
const [isChecked1, setChecked1] = useState(false);


  function search(){
    if (!selected || !date || (isChecked1 && !setDate)){
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
      return;
    }
    navigation.navigate('VoyageScreen')
}



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bilet Satışı</Text>
      <View style={styles.check_container}>
        <Text style={styles.checkText}>Gidiş</Text>
      <Checkbox
          style={styles.checkBox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#272643' : undefined}
        />
       <Text style={styles.checkText}>Gidiş-Dönüş</Text>
      <Checkbox
          style={styles.checkBox}
          value={isChecked1}
          onValueChange={setChecked1}
          color={isChecked1 ? '#272643' : undefined}
        />
      </View>
      <View>
        <Text style={styles.selectText}>Nereden...</Text>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder="Nereden..."
        inputStyles={{color:'gray', fontSize:16,}}
    />
        <Text style={styles.selectText}>Nereye...</Text>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder="Nereye..."
        inputStyles={{color:'gray', fontSize:16,}}
        rowStyle={{color:'red'}}
      />
    </View>
    <View>
     <Text style={styles.selectText}>Gidiş Tarihi</Text> 
     <DatePicker
        date={date}
        onChange={(date) => setDate(date)}
        icon={<Entypo name="chevron-small-down" size={24} color="gray" />}
        borderColor="gray"
        selectedColor="black" 
      />
    <Text style={styles.selectText}>Dönüş Tarihi</Text>
    <DatePicker
        date={datePicker}
        onChange={(datePicker) => setDatePicker(datePicker)}
        icon={<Entypo name="chevron-small-down" size={24} color="gray" />}
        borderColor="gray"
        selectedColor="black" 
      />
    </View>
      <View>
      <Button title="Ara"  onPress={search} />
      </View>
    </ScrollView>
  );
};

export default Ticket;


