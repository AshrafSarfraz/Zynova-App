import React,{useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Alert,TextInput } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Colors } from '../../Themes/Colors';
import { Location } from '../../Themes/Images';
import { Fonts } from '../../Themes/Fonts';
import DistanceDropDown from '../DropDown/Distance';
import CustomCalendar from '../../Screens/SelectDays/Calender/Calender';
import Icons from 'react-native-vector-icons/FontAwesome5';

const FilterRBSheet = ({ refRBSheet ,navigation}) => {
    const [ButtonState,setButtonState]=useState(0)
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };
    const toggleCheckbox1 = () => {
      setIsChecked1(!isChecked1);
    };
  
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      
        height={650}
        closeOnPressMask={false}
        
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
            
          },
          container: {
            borderTopLeftRadius: 20, // Adjust the radius as needed
            borderTopRightRadius: 20, // Adjust the radius as needed
            backgroundColor: "white",
            paddingBottom: 10, // Add padding at the bottom if needed
          },
          draggableIcon: {
            backgroundColor: '#35383F',
            width:40,
            height:5,
            borderRadius:10,
            marginTop:'4%',
          }
        }}
    >
      <View style={styles.RBSheetContent}>
        <Text style={styles.Filter_Txt} >Filter</Text>
      <View  style={styles.SearchBtnCont} >
        <TouchableOpacity  onPress={()=>{setButtonState(0)}}  style={[styles.Btn,ButtonState===0?styles.ActiveBtn:null]} >
            <Text style={[styles.DayText,ButtonState===0?styles.ActiveBtnText:null]} >Search By Day</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{setButtonState(1)}}  style={[styles.Btn,ButtonState===1?styles.ActiveBtn:null]} >
            <Text style={[styles.DayText,ButtonState===1?styles.ActiveBtnText:null]} >Search By Address</Text>
        </TouchableOpacity>
      </View>
      {ButtonState===1?
      <View style={styles.Body} >
      <View style={styles.InputCont} >
        <TextInput placeholder='Enter Address' placeholderTextColor={Colors.Grey9} style={styles.AddressInput} />
         <Image source={Location} style={styles.LocationImg} />
      </View>
        <Text style={styles.DistanceTxt} >Distance Radius</Text>
        <DistanceDropDown/>
     </View>:
     <View>    
      <View   style={styles.Checkbox_Cont}>
      <View style={styles.container}>
          <TouchableOpacity
          style={[styles.checkbox, isChecked ? styles.checked : null]}
          onPress={toggleCheckbox}
          >
         {isChecked && <Icons name="check" color="white" size={12} />}
         </TouchableOpacity>
         <Text style={styles.label}>For Return</Text>
         </View>
         <View style={styles.container}>
          <TouchableOpacity
          style={[styles.checkbox, isChecked1 ? styles.checked : null]}
          onPress={toggleCheckbox1}
          >
         {isChecked1 && <Icons name="check" color="white" size={12} />}
         </TouchableOpacity>
         <Text style={styles.label}>For Pick-up</Text>
         </View>
        </View>
        <CustomCalendar/>

     </View>
      
        }
      
   

      <View style={styles.Bottom_Btn_Cont} >
        <TouchableOpacity
          style={styles.ResetBtn}
          onPress={() => refRBSheet.current.close()}
        >
          <Text style={styles.CloseBtn_Txt} >Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ApplyBtn}
          onPress={() => {refRBSheet.current.close(),navigation.navigate('SearchData')}}
        >
          <Text style={styles.CloseBtn_Txt} >Apply</Text>
        </TouchableOpacity>
      </View>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  RBSheetContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    
  },
   Filter_Txt:{
    fontSize:20,
    color:Colors.Black,
    lineHeight:24,
    fontFamily:Fonts.SF_SemiBold,
    marginBottom:'3%',
    textAlign:'center'
   },
  SearchBtnCont:{
    flexDirection:"row",
    paddingTop:"4%",
    paddingBottom:'4%',
    borderTopWidth:0.5,
    justifyContent:'space-between'

  },
  Btn:{
    borderWidth:2,
    borderColor:Colors.Green,
    padding:'3%',
    width:'47%',
    borderRadius:5,
    alignItems:'center' 
  },
  DayText:{
    fontSize:14,
    color:Colors.Green,
    lineHeight:18,
    fontFamily:Fonts.SF_SemiBold
  },
  ActiveBtn:{
    backgroundColor:'#167738'
  },
  ActiveBtnText:{
    color:Colors.White
  },
  Body:{
    height:320,
  },
  InputCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
     elevation:1,
     backgroundColor:Colors.White,
     borderRadius:5,
     paddingHorizontal:'5%',
     padding:'1%',
     marginTop:'3%',
     marginBottom:'20%'
  },
  AddressInput:{
    fontSize:14,
    color:Colors.Black,
    lineHeight:18,
    fontFamily:Fonts.SF_Medium
  },
  LocationImg:{
    width:20,height:20,
    resizeMode:'contain',
    tintColor:Colors.Grey9
  },
  DistanceTxt:{
    fontSize:18,
    color:Colors.Black,
    lineHeight:22,
    fontFamily:Fonts.SF_SemiBold,
    marginBottom:'4%'
  },
  Bottom_Btn_Cont:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:'3%',
    borderTopWidth:0.5,
    paddingVertical:'3%',
    justifyContent:'space-between'
  },
  ResetBtn:{
     backgroundColor:'#9F9F9F',
     width:'47%',
     padding:'5%',
      borderRadius:5,
      alignItems:'center'
  },
  ApplyBtn:{
    backgroundColor:'#167738',
    width:'47%',
    padding:'5%',
     borderRadius:5,
     alignItems:'center'
 },
  CloseBtn_Txt:{
    fontSize:16,
    fontFamily:Fonts.SF_SemiBold,
    fontWeight:'500',
    lineHeight:20,
    color:Colors.White,
  },
  Checkbox_Cont:{
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:"center",
    justifyContent:'space-between',
    width:'80%'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderRadius:5,
    borderColor: Colors.Green,
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent:'center',
    borderColor: Colors.Green,
  },
  label: {
    fontSize: 14,
    color: Colors.Black,
    fontFamily:Fonts.SF_Medium,
    lineHeight:18, 
    fontWeight:'600'
  },

});

export default FilterRBSheet;