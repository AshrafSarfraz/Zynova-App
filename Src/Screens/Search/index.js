import { View, Text,StyleSheet, TouchableOpacity, Image, TextInput,Alert } from 'react-native'
import React,{useState,useRef} from 'react'
import MapScreen from './Map/Map'
import {  Bell, Bobi_Logo, Heart, Scan } from '../../Themes/Images'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import SearchItem from './SearchItem/Index'
import FilterRBSheet from '../../Components/RBSheet/FilterRBSheet'



const Search = ({navigation}) => {
  const [BtnState,setBtnState]=useState(0)
  const refRBSheet = useRef(null);

  
  return (
    <View style={styles.MainCont} >
    <View style={styles.Header_Cont} >
      <View  style={styles.Header} >
          <TouchableOpacity   onPress={()=>{navigation.navigate('Preference')} }  style={styles.Scan_Cont} >
            <Image  source={Scan} style={styles.Scan_Icon}/>
            <Text style={styles.Scan_Txt} >Scan</Text>
          </TouchableOpacity>
          <Image source={Bobi_Logo} style={styles.Bobi} />
        {BtnState===0?
         <View style={styles.Auth_Container} >
         <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} >
          <Text style={styles.login_Text} >Log in</Text>
         </TouchableOpacity>
         <Text  style={{color:Colors.Green}} >/</Text>
         <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} >
          <Text style={styles.login_Text} >Sign Up</Text>
         </TouchableOpacity>
        </View>
        :
         <View style={styles.Auth_Cont} >
           <TouchableOpacity onPress={()=>{navigation.navigate('Notification')}} style={styles.Auth_Icon} >
            <Image source={Bell} style={styles.Bell} />
           </TouchableOpacity>
           
           <TouchableOpacity onPress={()=>{navigation.navigate('WishlistItem')}} >
           <Image source={Heart} style={styles.Heart} />
           </TouchableOpacity>
          </View>
      
      }
         
      </View>
      <View  style={styles.Input_Cont} >
            <TouchableOpacity>
            <Image source={require('../../Assets/Icons/searchs.png')} style={styles.Search_Icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('SearchData')}} style={styles.SearchBtn} >
              <Text style={styles.Input} >Search for anything you need</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => refRBSheet.current.open()} >
            <Image source={require('../../Assets/Icons/filter.png')} style={styles.category_Icon} />
            </TouchableOpacity>
          </View>
    </View>
  
    <View  style={styles.BottomCont} >
          <TouchableOpacity  onPress={()=>{setBtnState(1)}} style={styles.Btn} >
            <Image source={require('../../Assets/Icons/maps.png')} style={[styles.Icon,{tintColor:BtnState===2?'#6AB595':null}]} />
            <Text style={styles.Map_Txt} >Map</Text>
          </TouchableOpacity >
          <Text>      </Text>
          <TouchableOpacity  onPress={()=>{setBtnState(2)}} style={styles.Btn}>
            <Image source={require('../../Assets/Icons/lists.png')} style={[styles.list,{tintColor:BtnState===2?'#FFFFFF':'#6AB595'}]} />
            <Text style={styles.listings_Txt} >listings</Text>
          </TouchableOpacity>
        </View>
        {BtnState===0?
           <View>
            <View style={styles.LogosCont} >
            <Image source={require('../../Assets/Images/searchImg.png')} style={styles.SearchImg} />
            <Image source={require('../../Assets/Images/Logo1.png')} style={styles.Logo1} />
            </View>
           <Image source={require('../../Assets/Images/Hi_Fi_Logo.png')} style={styles.Logo2} />
           <Text style={styles.Welcome_Txt} >Welcome Back, What are you looking for?</Text>
           </View>
          :null
         } 
   {BtnState===1?
    <MapScreen navigation={navigation}  />  :null
  }
  {BtnState===2?
  <View style={{paddingHorizontal:'3%'}} > 
    <SearchItem  navigation={navigation} /> 
  </View>
    :null
  }
      <FilterRBSheet refRBSheet={refRBSheet} navigation={navigation} />
      </View>
  )
}

export default Search

const styles=StyleSheet.create({
MainCont:{
  flex:1,
 backgroundColor:Colors.Bg
},
Header_Cont:{
 paddingBottom:'2%',
 elevation:2,
 backgroundColor:Colors.Bg,
 paddingHorizontal:'2%'

},
Header:{
flexDirection:'row',
justifyContent:'space-between',
paddingVertical:'2%',
backgroundColor:Colors.Bg,
},
Scan_Cont:{
   flexDirection:'row',
   alignItems:"center",

},
Scan_Txt:{
     marginLeft:"5%",
     color:Colors.Green,
     fontFamily:Fonts.SF_Medium,
     lineHeight:18,
     fontSize:14
},
Scan_Icon:{
 width:30,height:30
},
Bobi:{
  width:50,height:50,
  resizeMode:'contain'
},
Auth_Container:{
  flexDirection:'row',
  alignItems:"center",
  borderWidth:1,
  height:40,
  paddingHorizontal:'3%',
  borderRadius:10,
  borderColor:Colors.Green
},
Auth_Cont:{
  flexDirection:'row',
  alignItems:"center",
  
},
login_Text:{
 
     color:Colors.Green,
     fontFamily:Fonts.SF_Medium,
     lineHeight:16,
     fontSize:14
},
Input_Cont:{
  flexDirection:'row',
  justifyContent:'space-between',
  backgroundColor:Colors.White,
  paddingVertical:'3%',
  paddingHorizontal:'4%',
  borderRadius:10,
  alignItems:'center'

},
SearchBtn:{
   width:200,
 marginLeft:'-18%'
},
Input:{
  width:'100%',
  color:Colors.LightGreen,
},

Bell:{
  width:40,height:40,
  marginRight:'10%'
  
},
Heart:{
  width:40,height:40,
 marginRight:"-7%"
},
Search_Icon:{
width:22,height:22
},
category_Icon:{
  width:30,height:30
},
Icon:{
  width:30,height:30,
},
list:{
  width:30,height:30,
},
BottomCont:{
  width: '50%',
  flexDirection:'row',
  justifyContent:'space-between',
  backgroundColor: Colors.Green,
  alignSelf: 'center',
   zIndex:1,
  borderRadius: 18,
  padding:'5%',
  paddingHorizontal:"8%",
  position: 'absolute',
  top: '87%',
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
SearchImg:{
  width:'65%',
  height:200,
  alignSelf:'center',
  top:"6%",
  right:'4%'
},
Logo1:{
  width:100,
  height:100,
  bottom:'63%',
  right:'3%',
  alignSelf:'flex-end', 
},
Logo2:{
  width:100,
  height:100,
 bottom:"15%",
  left:'5%'
},
LogosCont:{
  alignItems:'flex-start',
},

Welcome_Txt:{
  fontSize:24,
  fontFamily:Fonts.SF_SemiBold,
  lineHeight:30,
  color:Colors.Green,
  width:'90%',
  alignSelf:'center',
  textAlign:'center',
  bottom:"13%"

}








})