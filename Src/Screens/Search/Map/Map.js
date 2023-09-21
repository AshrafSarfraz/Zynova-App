import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../../../Themes/Colors';
import { Circle } from '../../../Themes/Images';
import { Fonts } from '../../../Themes/Fonts';

const MapScreen = ({ navigation }) => {
   

  const initialRegion = {
    latitude: 37.78825, // Replace with the latitude of your location
    longitude: -122.4324, // Replace with the longitude of your location
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
     

      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }}
            title="Your Location"
            description="This is your location"
          />
        </MapView>
        <Image source={Circle} style={styles.FrameGreen1} />
        <Image source={Circle} style={styles.FrameRed} />
        <Image source={Circle} style={styles.FrameGreen2} />
        <Image source={Circle} style={styles.Diamond1} />
     
       
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  
    
      
      container: {
        flex: 1,
        backgroundColor:Colors.Bg
      },
      mapContainer: {
        flex: 1,
        width: '100%',
        height: '80%',
      },
      map: {
        flex: 1,
      },

  FrameGreen1: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '7%',
    left: '30%',
  },
  FrameGreen2: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '40%',
    left: '20%',
  },
  FrameRed: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '65%',
    left: '75%',
  },
  Diamond1: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '20%',
    left: '65%',
  },

  userHeader: {
    position: 'absolute',
    flexDirection:"row",
    top: 0,
    left: 0,
    width: '50%',
  },
Icon:{
    width:30,height:30,
},
Btn:{
    alignItems:'center',
    justifyContent:'center',
    width:'40%',
},
Map_Txt:{
    color:Colors.White,
     fontSize:12,
     lineHeight:18,
     fontFamily:Fonts.SF_Regular
},
listings_Txt:{
    color:'#E2E2E2',
     fontSize:12,
     lineHeight:18,
     fontFamily:Fonts.SF_Regular
},



});

export default MapScreen;
