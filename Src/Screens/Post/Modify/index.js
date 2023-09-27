import { View, Text, ScrollView, StyleSheet, TextInput ,Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Slider from 'react-native-slider';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import { Colors } from '../../../Themes/Colors'
import { Exclimation, Location, Minus, Plus2, Remove } from '../../../Themes/Images'
import { Fonts } from '../../../Themes/Fonts';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Exclimation_Alert from '../../../Components/Alerts/ExclimationAlert';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import HoldAlert from '../../../Components/Alerts/HoldAlert';
import DeleteAlert from '../../../Components/Alerts/DeleteAlert';

const PostModify = ({navigation}) => {
   const[ Categories,setCategories]=useState('Electronics')
   const[ Object,setObject]=useState('Laptop')
   const[ Loc,setLoc]=useState('New York, NY')
   const[ Value,setValue]=useState('1000 CHF')
   const[ Price,setPrice]=useState('50 CHF')
   const [Desc ,setDesc] =useState('DeLorem ipsum dolor sit amet, consectetur adipiscing elit. DeLorem ipsum dolor sit amet, consectetur adipiscing elit. DeLorem ipsum dolor sit amet, consectetur adipiscing elit. ...')
  
   




  const [seekbarValue, setSeekbarValue] = useState(5);
  const [isChecked, setIsChecked] = useState(true);
  const [singleFile, setSingleFile] = useState('');
  const [images, setImages] = useState([]); 

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertVisible1, setAlertVisible1] = useState(false);
  const [alertVisible2, setAlertVisible2] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };
  const showAlert1 = () => {
    setAlertVisible1(true);
  };

  const hideAlert1 = () => {
    setAlertVisible1(false);
  };
  const showAlert2 = () => {
    setAlertVisible2(true);
  };

  const hideAlert2 = () => {
    setAlertVisible2(false);
  };


  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      }) ;

      if (res.length > 0) {
        setSingleFile(res[0].uri);
        setImages([...images, res[0].uri]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled', 'File selection was canceled.');
      } else {
        Alert.alert('Error', 'An unknown error occurred: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const removeImage = (indexToRemove) => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
  };




  return (
    <ScrollView contentContainerStyle={styles.MainCont}>
      <View style={styles.HeaderCont} >
     <CustomHeader title={'Modify'}  onBackPress={()=>{navigation.goBack()}}  />
      <TouchableOpacity onPress={showAlert2} >
     <Image source={Remove} style={styles.Remove} />
     </TouchableOpacity>
     </View>
     <View style={{marginVertical:'7%'}} >
      <TouchableOpacity style={styles.Edit_Btn} >
        <Text style={styles.Edit_Txt} >Edit Disponibilities</Text>
      </TouchableOpacity>
     </View>
     <Text style={styles.Label} >Select Category</Text>
     <View style={styles.InputCont} >
      <TextInput  placeholder=''  value={Categories} placeholderTextColor={Colors.Grey9}  style={styles.Input} />
     </View>
     <Text style={styles.Label} >Name of your Object</Text>
     <View style={styles.InputCont} >
      <TextInput  placeholder='' value={Object}   placeholderTextColor={Colors.Grey9}  style={styles.Input} />
     </View>
     <Text style={styles.Label} >Add a meeting point (Not your home)</Text>
     <View style={styles.InputCont} >
      <TextInput  value={Loc}   placeholder='Add a meeting point (Not your home)'  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
       <Image source={Location} style={styles.Location} />
     </View>
     <Text style={styles.Label} >Original Value of your Object</Text>
     <View style={styles.InputCont} >
      <TextInput value={Value} placeholder='Original Value of your Object'  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
     </View>

      <Text style={styles.State_Txt} >State of your object</Text>
      
      
      <View>  
                  <Slider
        value={seekbarValue}
        minimumValue={0}
        maximumValue={50}
        step={1}
        thumbTintColor={Colors.White} // Gradient color for the thumb
        thumbStyle={styles.thumb} // Customize thumb height
        trackStyle={styles.track} // Customize slider height
        minimumTrackTintColor={Colors.Green}// Make the track transparent
        maximumTrackTintColor="#EAE6E5" // Make the track transparent
        onValueChange={(value) => setSeekbarValue(value)}
      /> 
      </View>
      <View style={styles.Condition} >
        <Text style={styles.Perfect} >Perfect</Text>
        <Text style={styles.Fair} >Fair</Text>
        <Text style={styles.Terrible} >Terrible</Text>
     </View>
     <Text style={styles.Label} >Rent per day</Text>
     <View style={styles.Rent_Cont} >
       <View style={styles.InputCont2} > 
      <TextInput  value={Price} placeholder=''  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
     </View>
     <View style={styles.Qty_Cont} >
      <Image source={Minus} style={styles.Plus} />
      <Text style={styles.Val}>50 CHF</Text>
      <Image source={Plus2} style={styles.Plus} />
     </View>
     </View>
     <Text style={styles.Label} >Description of your Object (Optional)</Text>
     <View style={styles.InputCont} >
      <TextInput  multiline  value={Desc} placeholder=''  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
     </View>
     
    <View  style={{}} >
    <View style={styles.Img_Picker}>
      {singleFile==='' ?
      <View>
        <Text
         style={styles.Attach_Txt}>
          Add some images of the object, It will also show the state of the object.               
        </Text>
        </View>
        :null}
        
         {/* <Image
          source={{ uri: singleFile }}
          style={styles.Image_sq}
        /> */}
        {images.map((imageUri, index) => (
        <View key={index} style={styles.Img_Pickers}>
          <Image
            source={{ uri: imageUri }}
            style={styles.Image_sq}
          />
          <TouchableOpacity
            style={styles.RemoveImage}
            onPress={() => removeImage(index)}
          >
           <Image source={require('../../../Assets/Icons/cross.png')} style={styles.Cross_Image}/>
          </TouchableOpacity>
           </View>
        
          ))}
          
          <TouchableOpacity style={styles.Image_sq} activeOpacity={0.5} onPress={selectOneFile}>
          <Image source={require('../../../Assets/Images/DocPlus.png')} style={styles.Image_sq} />
        </TouchableOpacity>


          </View>
    </View>





    <View style={styles.Forget_Cont} >
          <View style={styles.container}>
          <TouchableOpacity
          style={[styles.checkbox, isChecked ? styles.checked : null]}
          onPress={toggleCheckbox}
          >
         {isChecked && <Icons name="check" color="white" size={12} />}
         </TouchableOpacity>
         <Text style={styles.label}>Automatically Accept Rent Requests</Text>
         </View>
         <TouchableOpacity  style={styles.Forget_Btn} onPress={showAlert}  >
         <Image source={Exclimation} style={styles.Exclimation} />
         </TouchableOpacity>
    </View>
   
    
      <View style={styles.CustomButton} >
      <CustomButton title={'Update'} onPress={()=>{navigation.navigate('PostDetails')}} />
      </View>


      <View style={{marginBottom:'7%'}} >
      <TouchableOpacity style={styles.Hold_Btn} onPress={showAlert1} >
        <Image source={require('../../../Assets/Images/play.png')} style={styles.play} />
        <Text style={styles.Hold_Txt} >Un -Hold</Text>
      </TouchableOpacity>
     </View>

      <HoldAlert
        visible={alertVisible1}
        message="This is a custom alert!"
        OnHold={()=>{hideAlert1(),navigation.navigate('RentedItem')}}
        onClose={()=>{hideAlert1()}}
      />
       <Exclimation_Alert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert()}}
      />
      <DeleteAlert
        visible={alertVisible2}
        message="This is a custom alert!"
        onClose={()=>{hideAlert2()}}
      />
    </ScrollView>
  )
}

export default PostModify

const styles=StyleSheet.create({
  MainCont:{
    padding:'3%',
    backgroundColor:Colors.Bg,
    
  },
  Select_Cate:{
    marginVertical:'4%'
  },
  HeaderCont:{
     alignItems:'center',
     justifyContent:'space-between',
     flexDirection:'row',
     marginRight:'2%'
  },
  Remove:{
      width:35,height:35,
     
  },
  Edit_Btn:{
      borderWidth:2,
      borderColor:Colors.Green,
      width:150,
      alignItems:"center",
      paddingVertical:"2%",
      borderRadius:10
  },
  Edit_Txt:{
     fontSize:14,
     fontFamily:Fonts.SF_Bold,
     color:Colors.Green,
     lineHeight:16
  },
  InputCont:{
    backgroundColor:Colors.White,
    paddingHorizontal:'3%',
    padding:'1%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius:5,
    elevation:1,
    marginBottom:'3%'
  },
  Input:{
    width:'80%',
    color:Colors.Black,
    fontSize:14,
    fontFamily:Fonts.SF_Medium
  },
  Location:{
    width:20,height:20,resizeMode:'contain',tintColor:Colors.Black
  },
  thumb: {
    height: 30, // Customize thumb height
    width: 30, // You can also customize thumb width
    borderRadius:15,
    backgroundColor:Colors.White,
    borderWidth:1
  },
  track: {
    height: 12, // Customize slider height
    borderRadius: 5, // Make the track rounded
    
  },
  Condition:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  Perfect:{
    fontSize:14,color:Colors.Green,
    lineHeight:16,
  },
  Fair:{
    fontSize:14,color:Colors.Black,
    lineHeight:16,
  },
  Terrible:{
    fontSize:14,color:Colors.Red,
    lineHeight:16,
  },
  Rent_Cont:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  
  
  },
  State_Txt:{
    fontSize:14,fontFamily:Fonts.SF_Medium,color:Colors.Grey9,lineHeight:18
  },
  InputCont2:{
    width:'47%',
    padding:'1%',
    backgroundColor:Colors.White,
    elevation:1,
    alignItems:'center',
    borderRadius:10,
    marginVertical:'3%'
  },
  Qty_Cont:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'40%'
  },
  Plus:{
    width:35,height:35,
    tintColor:Colors.Green
  },
  Val:{
    fontSize:14,
    fontFamily:Fonts.SF_Bold,
    lineHeight:16,
    color:Colors.Green
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
    color: Colors.Green,
    fontFamily:Fonts.SF_Medium,
    lineHeight:18, 
  },
  Exclimation:{
      width:30,height:30
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  Forget_Cont:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between'
  },
  Forget_Btn:{

  },
  Forget_Txt:{
    fontSize: 14,
    color: Colors.Black2,
    fontFamily:Fonts.SF_Medium,
    lineHeight:18,
    marginBottom:'8%'
  },
  
  Img_Pickers:{
    width:'18%',
    height:80,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:Colors.White4,
    
  },
  Attach_Txt:{
      fontSize:16,
      width:200,
      fontFamily:Fonts.SF_Medium,
      lineHeight:20,
      color:Colors.Black,
     
  },
  Image_sq:{
     width:28,
     height:28,
     
     marginHorizontal:"1%",
    
   
  },
  Image_sqPuls:{
    width:30.28,
    height:30.28,
    alignSelf:'center',
    justifyContent:'center'
    // borderRadius:10,
    // marginHorizontal:"1%",
  
 },
  Image_sqButton:{
    width:46,
    height:49,
    borderRadius:10,
    marginHorizontal:"1%",
    backgroundColor:Colors.DarkPurple,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
 },
  Img_Picker:{
      width:'100%',
      paddingHorizontal:'4%',
      height:150,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:Colors.White,
      marginBottom:'5%',
      elevation:1
    },
    Next_Btn:{
      width:100,height:100
  },
  Button_View:{
    width:"99%",
    marginHorizontal:".5%"
  },
RemoveImage: {
  position: 'absolute',
  top: '-10%',
  
  borderRadius: 5,
  left:53,
  bottom:40,
  height:50,
  width:10,
},
Cross_Image:{
  width:20,
  height:20,
},
CustomButton:{
  marginVertical:'10%'
},
Label:{
  fontSize:14,fontFamily:Fonts.SF_Medium,color:Colors.Grey9,marginVertical:'1%'
},
Hold_Btn:{
  borderWidth:1,
  alignItems:'center',
  justifyContent:'center',
  height:55,
  flexDirection:'row',
  borderRadius:10,
  borderColor:Colors.Green
},
play:{
  width:25,height:25,
  marginRight:"1%"
},
Hold_Txt:{
  fontSize:16,fontFamily:Fonts.SF_SemiBold,
  color:Colors.Green
}
  

})

