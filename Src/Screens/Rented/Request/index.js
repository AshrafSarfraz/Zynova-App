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
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';


const RequestScreen = () => {
  const navigation = useNavigation();
  const [notificationArray, setNotificationArray] = useState([
    { Id:1,image: require('../../../Assets/Images/User2.png'), Info: 'Rent Request from User for the item named ', Type :'‘Headphones 7.1’',  Accept: '' ,  Time: '4 min Ago' ,                                              Btn:'See details',Image2:require('../../../Assets/Icons/next.png') },
    { Id:2, image: require('../../../Assets/Images/circle.png'), Info: 'Modify Request from User for you item named ', Type :'‘Headphones 7.1’',  Accept: 'to change the meeting point' ,  Time: '4 min Ago' ,                 Btn:'See details',Image2:require('../../../Assets/Icons/next.png') },
    { Id:3,image: require('../../../Assets/Images/circle.png'), Info: 'Your Request to modify meeting point  for the item named  ', Type :'‘Headphones 7.1’',  Accept: ' has bee accepted by the owner' ,  Time: '4 min Ago' ,Btn:'See details',Image2:require('../../../Assets/Icons/next.png') },
    

    
]);



  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <ScrollView style={styles.container}>
      <CustomHeader title={'Request'} onBackPress={()=>{navigation.goBack()}}  />
    
      <View style={styles.Flatlist_View}>
        <FlatList
          data={notificationArray}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
        <TouchableOpacity style={styles.Card_View} onPress={()=>{
            if(item.Id===1){
                navigation.navigate('RequestDetail1',{Data:item})}
            else{
                navigation.navigate('RequestDetail2',{Data:item}) 
            }
            }} 

            
>
            
            
           
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
    
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
     
    
    </ScrollView >
  );
};

export default RequestScreen;
