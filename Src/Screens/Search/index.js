import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, Platform } from 'react-native'
import React, { useState, useRef } from 'react'
import MapScreen from './Map/Map'
import { Bell, Bobi_Logo, Heart, Scan } from '../../Themes/Images'
import { Colors } from '../../Themes/Colors'
import SearchItem from './SearchItem/Index'
import FilterRBSheet from '../../Components/RBSheet/FilterRBSheet'
import { styles } from './style'
import spacerStyles from '../../Components/Spacers/style'


const Search = ({ navigation }) => {
  const [BtnState, setBtnState] = useState(0)
  const refRBSheet = useRef(null);


  return (
    <View style={styles.MainCont} >
      <View style={styles.Header_Cont} >
        {Platform.OS == "ios" ?
          <>
          <View style={spacerStyles.isDefault} />
            <View style={styles.Header} >
              <TouchableOpacity onPress={() => { navigation.navigate('Preference') }} style={styles.Scan_Cont} >
                <Image source={Scan} style={styles.Scan_Icon} />
                <Text style={styles.Scan_Txt} >Scan</Text>
              </TouchableOpacity>
              <Image source={Bobi_Logo} style={styles.Bobi} />
              {BtnState === 0 ?
                <View style={styles.Auth_Container} >
                  <TouchableOpacity onPress={() => { navigation.navigate('Login') }} >
                    <Text style={styles.login_Text} >Log in</Text>
                  </TouchableOpacity>
                  <Text style={{ color: Colors.Green }} >/</Text>
                  <TouchableOpacity onPress={() => { navigation.navigate('Login') }} >
                    <Text style={styles.login_Text} >Sign Up</Text>
                  </TouchableOpacity>
                </View>
                :
                <View style={styles.Auth_Cont} >
                  <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={styles.Auth_Icon} >
                    <Image source={Bell} style={styles.Bell} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { navigation.navigate('WishlistItem') }} >
                    <Image source={Heart} style={styles.Heart} />
                  </TouchableOpacity>
                </View>

              }
            </View>
          </> :
          <View style={styles.Header} >
            <TouchableOpacity onPress={() => { navigation.navigate('Preference') }} style={styles.Scan_Cont} >
              <Image source={Scan} style={styles.Scan_Icon} />
              <Text style={styles.Scan_Txt} >Scan</Text>
            </TouchableOpacity>
            <Image source={Bobi_Logo} style={styles.Bobi} />
            {BtnState === 0 ?
              <View style={styles.Auth_Container} >
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} >
                  <Text style={styles.login_Text} >Log in</Text>
                </TouchableOpacity>
                <Text style={{ color: Colors.Green }} >/</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} >
                  <Text style={styles.login_Text} >Sign Up</Text>
                </TouchableOpacity>
              </View>
              :
              <View style={styles.Auth_Cont} >
                <TouchableOpacity onPress={() => { navigation.navigate('Notification') }} style={styles.Auth_Icon} >
                  <Image source={Bell} style={styles.Bell} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('WishlistItem') }} >
                  <Image source={Heart} style={styles.Heart} />
                </TouchableOpacity>
              </View>

            }
          </View>
        }
        <View style={styles.Input_Cont} >
          <TouchableOpacity onPress={() => { navigation.navigate('SearchData') }} >
            <Image source={require('../../Assets/Icons/searchs.png')} style={styles.Search_Icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('SearchData') }} style={styles.SearchBtn} >
            <Text style={styles.Input} >Search for anything you need</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => refRBSheet.current.open()} >
            <Image source={require('../../Assets/Icons/filter.png')} style={styles.category_Icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.BottomCont} >
        <TouchableOpacity onPress={() => { setBtnState(1) }} style={styles.Btn} >
          <Image source={require('../../Assets/Icons/maps.png')} style={[styles.Icon, { tintColor: BtnState === 2 ? '#6AB595' : null }]} />
          <Text style={styles.Map_Txt} >Map</Text>
        </TouchableOpacity >
        <Text>      </Text>
        <TouchableOpacity onPress={() => { setBtnState(2) }} style={styles.Btn}>
          <Image source={require('../../Assets/Icons/lists.png')} style={[styles.list, { tintColor: BtnState === 2 ? '#FFFFFF' : '#6AB595' }]} />
          <Text style={styles.listings_Txt} >listings</Text>
        </TouchableOpacity>
      </View>
      {BtnState === 0 ?
        <View>
          <View style={styles.LogosCont} >
            <Image source={require('../../Assets/Images/searchImg.png')} style={styles.SearchImg} />
            <Image source={require('../../Assets/Images/Logo1.png')} style={styles.Logo1} />
          </View>
          <Image source={require('../../Assets/Images/Hi_Fi_Logo.png')} style={styles.Logo2} />
          <Text style={styles.Welcome_Txt} >Welcome Back, What are you looking for?</Text>
          
        </View>
        : null
      }
      {BtnState === 1 ?
        <MapScreen navigation={navigation} /> : null
      }
      {BtnState === 2 ?
        <View style={{ paddingHorizontal: '3%' }} >
          <SearchItem navigation={navigation} />
        </View>
        : null
      }
      <FilterRBSheet refRBSheet={refRBSheet} navigation={navigation} />
    </View>
  )
}

export default Search
