import { View, Text, ScrollView, StyleSheet, TextInput ,Image, TouchableOpacity} from 'react-native'

import React,{useState} from 'react'
import Slider from 'react-native-slider';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import SelectCategories from '../../../Components/DropDown/SelectCategories'
import { Colors } from '../../../Themes/Colors'
import { Exclimation, Location, Minus, Plus2 } from '../../../Themes/Images'
import CustomProgressBar from '../../../Components/ProgressBar/CustomProgressBar/Custom_Progress';
import { Fonts } from '../../../Themes/Fonts';
import Icons from 'react-native-vector-icons/FontAwesome5';
import RentAlert from '../../../Components/Alerts/RentRequest';
import Exclimation_Alert from '../../../Components/Alerts/ExclimationAlert';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const Add_Object = ({navigation}) => {
  const [seekbarValue, setSeekbarValue] = useState(5);
  const [isChecked, setIsChecked] = useState(false);
  const [singleFile, setSingleFile] = useState('');
  const [images, setImages] = useState([]); 

  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
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
     <CustomHeader title={'Add Object'}   onBackPress={()=>{navigation.goBack()}} />

     <View style={{marginVertical:'5%'}} >
      <CustomProgressBar progress={1}/>
     </View>
     <View style={styles.Select_Cate} >
      <SelectCategories/>
     </View>
     <View style={styles.InputCont} >
      <TextInput  placeholder='Name of your Object'  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
     </View>
     <View style={styles.InputCont} >
      <TextInput  placeholder='Add a meeting point (Not your home)'  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
       <Image source={Location} style={styles.Location} />
     </View>

     <View style={styles.InputCont} >
      <TextInput keyboardType='numeric'  placeholder='Original Value of your Object'  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
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
     <View style={styles.Rent_Cont} >
     <View style={styles.Qty_Cont} >
      <TouchableOpacity>
      <Image source={Minus} style={styles.Plus} />
      </TouchableOpacity>
      <View style={styles.InputCont2} >
      <TextInput  placeholder='Rent per day'  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
     </View>
     <TouchableOpacity>
      <Image source={Plus2} style={styles.Plus} />
      </TouchableOpacity>
     </View>
     </View>
     <View style={styles.InputCont} >
      <TextInput  placeholder='Description of your Object (Optional)'  placeholderTextColor={Colors.Grey9}  style={styles.Input} />
     </View>
     
    {/* <View  style={{}} >
    <View style={styles.Img_Picker}>
      {singleFile==='' ?
      <View>
        <Text
         style={styles.Attach_Txt}>
          Add some images of the object, It will also show the state of the object.               
        </Text>
        </View>
        :null}
        
       
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
    </View> */}





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
    <Exclimation_Alert
        visible={alertVisible}
        message="This is a custom alert!"
        onClose={()=>{hideAlert(),navigation.navigate('Confirm_Post')}}
      />
     <CustomButton title={'Next'}   onPress={()=>{navigation.navigate('Graph')}}/>
    </ScrollView>
  )
}

export default Add_Object

const styles=StyleSheet.create({
  MainCont:{
    padding:'3%',
    backgroundColor:Colors.Bg,
    
  },
  Select_Cate:{
    marginVertical:'4%'
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
  State_Txt:{
    fontSize:14,fontFamily:Fonts.SF_Medium,color:Colors.Grey9,lineHeight:18
  },
  Input:{
    width:'80%',
    color:Colors.Black
  },
  Location:{
    width:20,height:20,resizeMode:'contain',tintColor:Colors.Grey9
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
    justifyContent:'center',
    marginVertical:'2%'
  
  },
  InputCont2:{
    width:'50%',
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
    width:'80%',
    alignSelf:"center"
  },
  Plus:{
    width:30,height:30
  },
  Val:{
    fontSize:14,
    fontFamily:Fonts.SF_Bold,
    lineHeight:16,
    color:Colors.Grey5
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
      width:22,height:22
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  Forget_Cont:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   marginBottom:"15%"
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
      fontSize:14,
      width:200,
      fontFamily:Fonts.SF_Medium,
      lineHeight:20,
      color:Colors.Grey9,
     
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
}
  

})




// import React, { useState, useEffect } from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert,Text } from 'react-native';
// import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
// import { Colors } from '../../../Themes/Colors';
// import { Fonts } from '../../../Themes/Fonts';
// import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
// import Reuse_Button from '../../../Components/Reuse_Button/Index';
// import Withdraw from '../../Withdraw/index';



// type ImageUri = string;
// const Okay = (props:any) => {
//   const { navigation, route } = props;
//   const { Edit } = route.params || {};
//   const [singleFile, setSingleFile] = useState<string>('');
//   const [images, setImages] = useState<ImageUri[]>([]); 

  // const selectOneFile = async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     }) as DocumentPickerResponse[];

  //     if (res.length > 0) {
  //       setSingleFile(res[0].uri);
  //       setImages([...images, res[0].uri]);
  //     }
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       Alert.alert('Canceled', 'File selection was canceled.');
  //     } else {
  //       Alert.alert('Error', 'An unknown error occurred: ' + JSON.stringify(err));
  //       throw err;
  //     }
  //   }
  // };

  // const removeImage = (indexToRemove: number) => {
  //   const updatedImages = images.filter((_, index) => index !== indexToRemove);
  //   setImages(updatedImages);
  // };


//   return (
//     <ScrollView contentContainerStyle={styles.MainContainer}>
//       {Edit ? <CustomHeader title='Edit profile' onBackPress={() => { navigation.goBack() }} /> :
//         <CustomHeader title='Profile Setup' onBackPress={() => { navigation.goBack() }} />}
//       {Edit ? null : <Text style={styles.Name} >Okay,</Text>}
//       <Text style={styles.Gender_Txt} >Tell us more about yourself</Text>
//       <Text style={styles.DoB_Txt} >What’s your date of birth?</Text>

//      { Edit ?( <View style={styles.Input_Container} >
//      <TextInput placeholder='02' placeholderTextColor={Colors.Black2} maxLength={2} style={styles.DD_Input} keyboardType='numeric' />
//      <TextInput placeholder='06' placeholderTextColor={Colors.Black2} maxLength={2} style={styles.MM_Input} keyboardType='numeric'/>
//      <TextInput placeholder='1996' placeholderTextColor={Colors.Black2} maxLength={4} style={styles.Year_Input} keyboardType='numeric' /> 
//      </View>)
//      :

//    (<View style={styles.Input_Container} >
//     <TextInput placeholder='DD' placeholderTextColor={Colors.Grey9} maxLength={2} style={styles.DD_Input}keyboardType='numeric'  />
//     <TextInput placeholder='MM' placeholderTextColor={Colors.Grey9} maxLength={2} style={styles.MM_Input}  keyboardType='numeric'/>
//     <TextInput placeholder='Year' placeholderTextColor={Colors.Grey9} maxLength={4} style={styles.Year_Input}  keyboardType='numeric'/>
//    </View>)

//   }

//     <Text style={styles.Desc_Txt} >Describe yourself in few words</Text>
//     <TextInput placeholder='Write here' textAlignVertical='top' placeholderTextColor={Colors.Grey9} maxLength={250} multiline style={styles.Desc_Input} />
    
      
      // {Edit ? (<View style={styles.Img_Picker}>
      //    <TouchableOpacity style={styles.Image_sq} activeOpacity={0.5} onPress={selectOneFile}>
      //     <Image source={require('../../../Assets/Images/Image_Sq.png')} style={styles.Image_sq} />
      //   </TouchableOpacity>
       
      //   {/* <Image
      //     source={{ uri: singleFile }}
      //     style={styles.Image_sq}
      //   /> */}
      //   {images.map((imageUri, index) => (
      //   <View key={index} style={styles.Img_Pickers}>
      //     <Image
      //       source={{ uri: imageUri }}
      //       style={styles.Image_sq}
      //     />
      //     <TouchableOpacity
      //       style={styles.RemoveImage}
      //       onPress={() => removeImage(index)}
      //     >
      //      <Image source={require('../../../Assets/Images/CloseSquare.png')} style={styles.Cross_Image}/>
      //     </TouchableOpacity>
      //      </View>
        
      //     ))}
          
//           <TouchableOpacity style={styles.Image_sqButton} activeOpacity={0.5} onPress={selectOneFile}>
//           <View style={styles.circular}> 
//                <Image source={require('../../../Assets/Images/AddImage.png')} style={styles.Image_sqPuls} />
//                </View> 
//             </TouchableOpacity>


//           </View>)
//           :
        //   (<View style={styles.Img_Picker}>
        
        // <Text style={styles.Attach_Txt}>Attach some attractive images of you</Text>
        // {/* <Image
        //   source={{ uri: singleFile }}
        //   style={styles.Image_sq}
        // /> */}
        // {images.map((imageUri, index) => (
        // <View key={index} style={styles.Img_Pickers}>
        //   <Image
        //     source={{ uri: imageUri }}
        //     style={styles.Image_sq}
        //   />
        //   <TouchableOpacity
        //     style={styles.RemoveImage}
        //     onPress={() => removeImage(index)}
        //   >
        //    <Image source={require('../../../Assets/Images/CloseSquare.png')} style={styles.Cross_Image}/>
        //   </TouchableOpacity>
        //    </View>
        
        //   ))}
          
        //   <TouchableOpacity style={styles.Image_sq} activeOpacity={0.5} onPress={selectOneFile}>
        //   <Image source={require('../../../Assets/Images/Image_Sq.png')} style={styles.Image_sq} />
        // </TouchableOpacity>


        //   </View>)}





//     {Edit ?
//   ( <Reuse_Button title = 'Next' onPress={()=>{navigation.navigate('Great',{Edit:true})}} Button_View={styles.Button_View} />)
// :
  
//   ( <View style={styles.Progress_Cont} >
//     <View style={styles.Progress_Bar}  >
//       <View style={styles.Filled_Progress_Bar} >
//       </View>
//       <View style={styles.Filled_Progress_Bar} >
//       </View>
//       <View style={styles.Filled_Progress_Bar} >
//       </View>
//       <View style={styles.Unfilled_Progress_Bar} >
//       </View>
//       <View style={styles.Unfilled_Progress_Bar} >
//       </View>
//       <View style={styles.Unfilled_Progress_Bar} >
//       </View>
//     </View>
//     <TouchableOpacity style={styles.Next_Cont} onPress={()=>{navigation.navigate('Great')}}  >
     
//         <Image source={require('../../../Assets/Images/btn.png')} style={styles.Next_Btn} />
//     </TouchableOpacity>
//    </View>)}
      
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   MainContainer:{
//     backgroundColor:Colors.White,
//     padding:'3%',
//     },
//     Name:{
//     marginTop:"3%",
//     marginBottom:'0.5%',
//     fontSize:18,
//     fontFamily:Fonts.SF_SemiBold,
//     lineHeight:24,
//     color:Colors.Black,
//     },
//     Gender_Txt:{
//         fontSize:16,
//         fontFamily:Fonts.SF_SemiBold,
//         lineHeight:20,
//         color:Colors.Black4,
//         marginBottom:'5%',
//         marginTop:'3%'
//     },
//     DoB_Txt:{
//         fontSize:16,
//         fontFamily:Fonts.SF_Medium,
//         lineHeight:20,
//         color:Colors.Black,
//     },
//     Input_Container:{
//      flexDirection:'row',
//      alignItems:'center',
//      marginVertical:'5%',
//     },
//     DD_Input:{
//      width:'25%',
//      backgroundColor:Colors.White4,
//      borderRadius:10,
//      padding:'5%',
//      textAlign:'center',
//      fontSize:16,
//      fontFamily:Fonts.SF_Medium,
//      lineHeight:20,
//      marginRight:'4%',
//      color:Colors.Black2
//     },
//     MM_Input:{
//         width:'25%',
//         backgroundColor:Colors.White4,
//         borderRadius:10,
//         padding:'5%',
//         textAlign:'center',
//         fontSize:16,
//         fontFamily:Fonts.SF_Medium,
//         lineHeight:20,
//         marginRight:'4%',
//         color:Colors.Black2
//     },
//     Year_Input:{
//         width:'25%',
//         backgroundColor:Colors.White4,
//         borderRadius:10,
//         padding:'5%',
//         textAlign:'center',
//         fontSize:16,
//         fontFamily:Fonts.SF_Medium,
//         lineHeight:20,
//         marginRight:'4%',
//         color:Colors.Black2
//     },
//     Desc_Txt:{
//         fontSize:16,
//         fontFamily:Fonts.SF_Medium,
//         lineHeight:20,
//         color:Colors.Black,
//         marginBottom:'4%',
//     },
//     Desc_Input:{
//         width:'100%',
//         height:200,
//         backgroundColor:Colors.White4,
//         borderRadius:10,
//         padding:'5%',
//         fontSize:16,
//         fontFamily:Fonts.SF_Medium,
//         lineHeight:20,
//         marginBottom:'5%',
//         color:Colors.Black2
//     },
//     Img_Picker:{
//       width:'100%',
//       paddingHorizontal:'4%',
//       height:130,
//       flexDirection:'row',
//       justifyContent:'space-between',
//       alignItems:'center',
//       borderRadius:10,
//       backgroundColor:Colors.White4,
//       marginBottom:'5%',
  //   },
  //   Img_Pickers:{
  //     width:'18%',
  //     height:80,
  //     flexDirection:'row',
  //     justifyContent:'space-between',
  //     alignItems:'center',
  //     borderRadius:10,
  //     backgroundColor:Colors.White4,
      
  //   },
  //   Attach_Txt:{
  //       fontSize:16,
  //       width:'50%',
  //       fontFamily:Fonts.SF_Medium,
  //       lineHeight:20,
  //       color:Colors.Black,
       
  //   },
  //   Image_sq:{
  //      width:28,
  //      height:28,
  //      borderRadius:10,
  //      marginHorizontal:"1%",
      
     
  //   },
  //   Image_sqPuls:{
  //     width:30.28,
  //     height:30.28,
  //     alignSelf:'center',
  //     justifyContent:'center'
  //     // borderRadius:10,
  //     // marginHorizontal:"1%",
    
  //  },
  //   Image_sqButton:{
  //     width:46,
  //     height:49,
  //     borderRadius:10,
  //     marginHorizontal:"1%",
  //     backgroundColor:Colors.DarkPurple,
  //     alignSelf:'center',
  //     justifyContent:'center',
  //     alignItems:'center'
  //  },
    
    
//     Progress_Cont:{
//         flexDirection:'row',
//      alignItems:'center',
//      justifyContent:'space-between'
    
    
//     },
//     Progress_Bar:{
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-between',
//     },
//     Filled_Progress_Bar:{
//         width:30,
//         height:10,
//         backgroundColor:Colors.DarkPurple,
//         borderRadius:5,
//         marginRight:'1%',
//     },
//     Unfilled_Progress_Bar:{
//         width:30,
//         height:10,
//         backgroundColor:Colors.Grey4,
//         borderRadius:5,
//         marginRight:'1%',
//     },
//     circular:{
// width:30,
// height:30,
// borderRadius:50,
// backgroundColor:Colors.White
//     },
//     Next_Cont:{
      
//     },
  //   Next_Btn:{
  //       width:100,height:100
  //   },
  //   Button_View:{
  //     width:"99%",
  //     marginHorizontal:".5%"
  //   },
  // RemoveImage: {
  //   position: 'absolute',
  //   top: 15,
  //   right: 0,
  //   borderRadius: 5,
  //   left:40,
  //   bottom:40,
  //   height:50,
  //   width:10,
  // },
  // Cross_Image:{
  //   width:11.67,
  //   height:11.67,
  // }
 
// });

// export default Okay;
