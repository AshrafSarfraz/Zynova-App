
import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity,Image,Modal,Text,StyleSheet } from 'react-native';
import { GiftedChat, IMessage, Bubble } from 'react-native-gifted-chat';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from "../Themes/Colors"
import { Fonts } from '../Themes/Fonts';
import CustomHeader2 from '../Components/CustomHeader2/CustomHeader2';

const Fazool = ({navigation}) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
  
    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          createdAt: new Date(),
          name: 'React Native',
          avatar: require('../Assets/Images/Bobi_Logo.png'),
          user: {
            _id: 2,
          },
        },
        {
          _id: 2,
          text: 'Lorem ipsum dolor sit amet, ',
          createdAt: new Date(),
          name: 'React Native',
          avatar: require('../Assets/Images/Device.png'),
          user: {
            _id: 2,
          },
          sent: true,
          received: true,
        },
      ]);
    }, []);
 
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#233930',
            padding: '4%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 20,
            marginBottom: '3%',
            width: '80%',
            alignItems: 'flex-start',
          },
          right: {
            backgroundColor: '#038F54',
            padding: '4%',
            borderTopRightRadius: 5,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            marginBottom: '3%',
            width: '80%',
            alignItems: 'flex-start',
          },
        }}
        textStyle={{
          left: {
            color: 'white',
            textAlign: 'left',
            width: 200,
          },
          right: {
            color: 'white',
            textAlign: 'justify',
            width: 200,
          },
        }}
      ></Bubble>
    );
  };
  const renderTime = (props) => {
    return (
      <Text
        style={{
          color: '#FFFFFF',
          position: 'absolute',
          right: '-30%', // Align the timestamp to the right
          bottom: 5, // Position it at the bottom
        }}
      >
        {moment(props.currentMessage.createdAt).format('hh:mm A')}
      </Text>
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar {...props}>
        
        <TextInput
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          style={{ flex: 1, fontSize: 16, marginLeft: 10 }}
        />
      </InputToolbar>
    );
  };
  const handleSend = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        _id: Math.round(Math.random() * 1000000).toString(),
        text: inputText.trim(),
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'User', 
        },
      };

      setMessages((previousMessages) => GiftedChat.append(previousMessages, [newMessage]));

      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderTime={renderTime}
        renderAvatar={null}
      />
      <View style={styles.InputOuter_View}>
        <View style={styles.InputContainer}>
        <TouchableOpacity  style={styles.Touch_Image} onPress={() => console.log('Smile Icon Pressed')}>
          <Icon name="smile-o" size={15} color={Colors.DarkPurple} />
        </TouchableOpacity>
        <TextInput    style={styles.Textinputcontainer}

          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
         <TouchableOpacity style={styles.Touch_Image}>
       <Image source={require('../Assets/Images/Bobi.png')} style={styles.VectorImage} />
         </TouchableOpacity>
      <TouchableOpacity style={styles.Touch_Image}>
        <Icon name="camera" size={15} color={Colors.DarkPurple} /> 
         </TouchableOpacity>
         </View>
        <View style={styles.Circular_View}>
        <TouchableOpacity onPress={handleSend}>
          <Image
            resizeMode='contain'
            style={styles.Send_Image}
             source={require('../Assets/Images/Bobi.png')}
          />
        </TouchableOpacity>
      </View>
      </View>


     
      

      
    </View>
  );
};

export default Fazool;




const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor:Colors.White,
   
     
    },
    Buttons_View:{
      flexDirection:'row',
      height:77,
      width:"90%",
      marginHorizontal:'5%'
    },
    Button_View:{
      width:"42%",
      backgroundColor:Colors.White,
      borderRadius:10,
      borderWidth:1,
      borderColor:Colors.DarkPurple,
      height:46,
    },
    Button_Style:{
      color:Colors.DarkPurple,
      fontWeight:'700',
      fontSize:12,
      fontFamily:Fonts.SF_Bold
    },
    Line_View:{
      width:'100%',
      height:2,
      backgroundColor:Colors.Grey4
    },
    footer: {
    
      height: 35,
      backgroundColor: Colors.White,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  voucherDropdownButton: {
    flexDirection: 'row',
    height: 54,
    borderWidth: 1,
    borderColor: Colors.grey1,
    marginHorizontal: '5%',
    marginTop: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
  },
  voucherDropdownButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '2%',
  },
  voucherIcon: {
    height: 28,
    width: 28,
  },
  voucherButtonText: {
    fontSize: 18,
    fontFamily: Fonts.SF_Bold,
    color: Colors.DarkPurple,
    marginLeft: '5%',
  },
  dropdownIcon: {
    height: 23,
    width: 23,
    marginRight: '5%',
  },
  voucherDropdownList: {

  },
  dropdownItem: {

    backgroundColor:Colors.DarkPurple,
    marginVertical:'5%',
    height:70,
    marginHorizontal:"5%",
    borderRadius:10
    
  },
  dropdownItemText: {
    fontSize: 18,
    fontFamily:Fonts.SF_SemiBold,
    color:Colors.White,
    marginLeft:'5%',
    marginTop:'5%'
  },
  dropdownItemdesc:{
    fontSize: 14,
    fontFamily:Fonts.SF_SemiBold,
    color:Colors.White,
    marginLeft:'5%',
    bottom:5
  },
  // container: {
  //   paddingVertical: 16,
  // },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
 
    bottom: '10%',
    justifyContent:'space-between',
    marginHorizontal:"5%",
    marginVertical:"7%",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    // Add any additional styling for the icon
  },
  text: {
    fontSize: 15,
  fontFamily:Fonts.SF_SemiBold,
  color:Colors.DarkPurple,
  width:'79%'
  },
previousTxt:{
  fontFamily:Fonts.SF_SemiBold,color:Colors.DarkPurple,fontSize:22,marginLeft:"5%"
},
mainContainer:{
  flex: 1,
   marginBottom: '1%'
},
Send_Image:{
   height: 24, 
   width: 24,
   justifyContent:'center',
   alignSelf:'center'
   },
Circular_View:{
  height:56,
  width:56,
  borderRadius:70,
  backgroundColor:Colors.DarkPurple,
  justifyContent:'center',
  alignSelf:'center',
  marginBottom:"20%",
  marginLeft:"2%"
},
Smile_Icon:{
  width:16,
  height:16,
},
IconImage:{
  width:15,
  height:15,
},
textInput:{
  
},
modalContainer: {
  flex: 1,
  width: '100%',

  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  marginLeft:'5%',
  marginRight:"5%",
 alignSelf:'center'
},
modalChildContainer: {
  height:"8%",
  width: '35%',
   backgroundColor: Colors.White,
  borderRadius: 5,
  top:'7%',
 left:'10%',
 flexDirection:'row'
   
},
ReportImage:{
width:16,
height:16,
alignSelf:'center',
marginLeft:'5%'
},
modalbutton:{
  width:'50%',
  height:40,
  backgroundColor:Colors.White,
  borderRadius:10,
  alignSelf:'center',
  justifyContent:'center'
},
modalbutton1:{
  width:'45%',
  height:58,
  backgroundColor:Colors.White,
  borderRadius:10,
  alignSelf:'center',
  justifyContent:'center',
  borderWidth:1,
  borderColor:Colors.DarkPurple
},
paySuccess_button: {
  marginTop:'5%',
  fontFamily: Fonts.SF_Bold,
  FontWeight: "700",
  FontSize: 16,
  Lineheight: 22.13,
  color: Colors.Black,
  alignSelf:'center',

  
},
paySuccess_buttonYes: {
  marginTop:'5%',
  fontFamily: Fonts.SF_Bold,
  FontWeight: "700",
  FontSize: 16,
  Lineheight: 22,
  color: Colors.Red,
  alignSelf:'center',

  
},

InputOuter_View: {
   flexDirection: 'row', 
   alignItems: 'center',
    backgroundColor: 'white',
    height:60,
    width:"94%",
    marginHorizontal:"3%",
   },

InputContainer:{
  flexDirection:'row',
 width:"80%",
backgroundColor:Colors.White4,
  borderRadius:10,
  height:55,
  marginBottom:"20%"
},
inputToolbar:{
  width:"100%",
},
VectorImage:{
width:14.8,
height:16, 
alignSelf:'center',
marginRight:10,
resizeMode:'contain'
},
Textinputcontainer:{
width:"70%"
},
Touch_Image:{
  alignSelf:'center',
 marginLeft:5,
}
});