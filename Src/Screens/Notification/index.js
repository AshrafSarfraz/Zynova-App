import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';

const Notifications = () => {
  const navigation = useNavigation();
  const [notificationArray, setNotificationArray] = useState([
    { image: require('../../Assets/Images/User2.png'), Info: 'Rent Request from User for the item named ', Type :'‘Headphones 7.1’',  Accept: ' has been accepted!' ,  Time: '4 min Ago' ,Btn:'Proceed to pay',Image2:require('../../Assets/Icons/next.png') },
    { image: require('../../Assets/Images/picc.png'), Info: 'DeLorem ipsum dolor sit amet, consectetur adipiscing elit.  ', Type :'',  Accept: '' ,  Time: '4 min Ago' ,Btn:'See details',Image2:''},
    { image: require('../../Assets/Images/picc.png'), Info: 'DeLorem ipsum dolor sit amet, consectetur adipiscing elit.  ', Type :'',  Accept: '' ,  Time: '4 min Ago' ,Btn:'See details',Image2:''},
    { image: require('../../Assets/Images/picc.png'), Info: 'DeLorem ipsum dolor sit amet, consectetur adipiscing elit.  ', Type :'',  Accept: '' ,  Time: '4 min Ago' ,Btn:'See details',Image2:''},
    
]);
const [notificationArray1, setNotificationArray1] = useState([
  
    { image: require('../../Assets/Images/picc.png'), Info: 'DeLorem ipsum dolor sit amet, consectetur adipiscing elit.  ', Type :'',  Accept: '' ,  Time: '4 min Ago' ,Btn:'See details',Image2:''},
    
]);


  const onDeleteNotification = (itemToDelete) => {
    const updatedArray = notificationArray.filter(notification => notification !== itemToDelete);
    setNotificationArray(updatedArray);
  };

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <ScrollView style={styles.container}>
      <CustomHeader title={'Notifications'} onBackPress={()=>{navigation.goBack()}}  />
      <Text style={styles.Today_Text}>Today</Text>
      <View style={styles.Flatlist_View}>
        <FlatList
          data={notificationArray}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <Swipeout
              right={[
                {
                  component: (
                    <Image
                      source={require('../../Assets/Icons/trash.png')}
                      style={styles.DeletImage_Style}
                    />
                  ),
                  backgroundColor: '#FC9D9C',
                  
                  onPress: () => onDeleteNotification(item),
                },
              ]}>
              <TouchableOpacity style={styles.Card_View} onPress={()=>{navigation.navigate('ReviewSummary2')}} >
                <View style={styles.Circular_View}>
                  <Image source={item.image} style={styles.Alarm_Imge} />
                </View>
                <View style={styles.Texts_View}>
                  <Text style={styles.Info_Text}>{item.Info}
                  <Text style={styles.Type_Text}>{item.Type} 
                  <Text style={styles.Info_Text}>{item.Accept} </Text>
                  </Text>
                  </Text>
                  <View style={styles.Footer} >
                  <Text style={styles.Time_Text}>{item.Time}</Text>
                  <TouchableOpacity style={styles.BtnCont} > 
                    <Text style={styles.Btn_Txt} >{item.Btn}</Text>
                    <Image source={item.Image2} style={styles.Image2} />
                  </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </Swipeout>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <Text style={styles.Today_Text}>Last week</Text>

      <View style={styles.Flatlist_View}>
        <FlatList
          data={notificationArray1}
          renderItem={({ item }) => (
            <Swipeout
              right={[
                {
                  component: (
                    <Image
                      source={require('../../Assets/Icons/trash.png')}
                      style={styles.DeletImage_Style}
                    />
                  ),
                  backgroundColor: 'lightpink',
                  
                  onPress: () => onDeleteNotification(item),
                },
              ]}>
              <TouchableOpacity style={styles.Card_View}>
                <View style={styles.Circular_View}>
                  <Image source={item.image} style={styles.Alarm_Imge} />
                </View>
                <View style={styles.Texts_View}>
                  <Text style={styles.Info_Text}>{item.Info}
                  <Text style={styles.Type_Text}>{item.Type} 
                  <Text style={styles.Info_Text}>{item.Accept} </Text>
                  </Text>
                  </Text>
                  <View style={styles.Footer} >
                  <Text style={styles.Time_Text}>{item.Time}</Text>
                  <TouchableOpacity style={styles.BtnCont} > 
                    <Text style={styles.Btn_Txt} >{item.Btn}</Text>
                    <Image source={item.Image2} style={styles.Image2} />
                  </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </Swipeout>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </ScrollView >
  );
};

export default Notifications;