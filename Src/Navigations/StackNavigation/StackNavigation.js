import react from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash_Screen from '../../Screens/Authentication/Splash/Splash_Screen';
import Splash_Blank from '../../Screens/Authentication/Splash/Splash_Blank';
import OnBoarding from '../../Screens/OnBoarding';
import SignUp from '../../Screens/Authentication/SignupScreen';
import SignInScreen from '../../Screens/Authentication/LoginScreen';
import PhoneValidation from '../../Screens/Authentication/PhoneValidation/VerifyNumber';
import Otp from '../../Screens/Authentication/PhoneValidation/Enter_Otp';
import ForgetPassword from '../../Screens/Authentication/ForgetPassword/ForgetPassword';
import Reset from '../../Screens/Authentication/ForgetPassword/Reset';
import GetCode from '../../Screens/Authentication/ForgetPassword/GetCode';
import Bottom from '../BottomNavigation/BottomNavigation';
import MapScreen from '../../Screens/Search/Map/Map';
import SearchItem from '../../Screens/Search/SearchItem/Index';
import ProductDetails from '../../Screens/ProductDetails';
import ReportUser from '../../Screens/Report';
import ReportSubmit from '../../Screens/ReportSubmit';
import WishlistItem from '../../Screens/Wishlist';
import SelectDays from '../../Screens/SelectDays';
import Review_Summary from '../../Screens/ReviewSummary';
import Payment from '../../Screens/Payment';
import Account from '../../Screens/Profile/Account';
import Balance from '../../Screens/Profile/Balance';
import WhatUserThink from '../../Screens/Profile/UserThink';
import Contact from '../../Screens/Profile/Contact';
import Details from '../../Screens/Profile/Details';
import Withdraw from '../../Screens/Profile/Withdraw';
import Welcome from '../../Screens/Welcome';
import SearchData from '../../Screens/Search/SearchData';
import MultipleDay from '../../Screens/SelectDays/MultipleDay';
import SingleDay from '../../Screens/SelectDays/SingleDay';
import ChatScreen from '../../Screens/Disscuss/Chat/ChatScreen';
import ReportUsers from '../../Screens/ReportUser';
import Notifications from '../../Screens/Notification';
import Review_Summary2 from '../../Screens/Notification/ReviewSummary/Review';
import ScanQrCode from '../../Screens/ScanCode/ScanQr';
import SelectPreference from '../../Screens/ScanCode/SelectPreference/ScanQR';
import BobizzDetails from '../../Screens/Rented/BobizzDetail';
import Cancel_Modify from '../../Screens/Rented/Modify-Cancel';
import QrcodeScanner from '../../Screens/ScanCode/Qrcode_Scanner';
import Renteditem from '../../Screens/Rented/RentemItem';
import ModifyScreen from '../../Screens/Rented/ModifyScreen';
import CancelScreen from '../../Screens/Rented/Cancel';








const Stack=createNativeStackNavigator();

const StackNavigations=()=>{
    return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='ModifyScreen' screenOptions={{headerShown:false}} >
     <Stack.Screen name='Splash_Blank'   component={Splash_Blank} />
     <Stack.Screen name='Splash'         component={Splash_Screen} />
     <Stack.Screen name='OnBoarding'     component={OnBoarding} />
     <Stack.Screen name='SignUp'         component={SignUp} />
     <Stack.Screen name='Login'          component={SignInScreen} />
     <Stack.Screen name='PhoneValidation'component={PhoneValidation} />
     <Stack.Screen name='Otp'            component={Otp} />
     <Stack.Screen name='Forget'         component={ForgetPassword} />
     <Stack.Screen name='GetCode'        component={GetCode} />
     <Stack.Screen name='Reset'          component={Reset} />
     <Stack.Screen name='Welcome'        component={Welcome} />
     <Stack.Screen name='BottomTab'      component={Bottom} />
     <Stack.Screen name='Maps'           component={MapScreen} />
     <Stack.Screen name='SearchItem'     component={SearchItem} />
     <Stack.Screen name='ProductDetails' component={ProductDetails} />
     <Stack.Screen name='Report'         component={ReportUser} />
     <Stack.Screen name='ReportSubmit'   component={ReportSubmit} />
     <Stack.Screen name='WishlistItem'   component={WishlistItem} />
     <Stack.Screen name='SelectDays'     component={SelectDays} />
     <Stack.Screen name='MultipleDay'    component={MultipleDay} />
     <Stack.Screen name='SingleDay'      component={SingleDay} />
     <Stack.Screen name='ReviewSummary'  component={Review_Summary} />
     <Stack.Screen name='Payment'        component={Payment} />
     <Stack.Screen name='Account'        component={Account} />
     <Stack.Screen name='Balance'        component={Balance} />
     <Stack.Screen name='WhatUserThink'  component={WhatUserThink} />
     <Stack.Screen name='Contact'        component={Contact} />
     <Stack.Screen name='Details'        component={Details} />
     <Stack.Screen name='Withdraw'       component={Withdraw} />
     <Stack.Screen name='SearchData'     component={SearchData} />
     <Stack.Screen name='Chatting'       component={ChatScreen} />
     <Stack.Screen name='ReportUser'     component={ReportUsers} />
     <Stack.Screen name='Notification'   component={Notifications} />
     <Stack.Screen name='ReviewSummary2' component={Review_Summary2} />
     <Stack.Screen name='Preference'     component={SelectPreference} />
     <Stack.Screen name='ScanQrCode'     component={ScanQrCode} />
     <Stack.Screen name='BobizzDetail'   component={BobizzDetails} />
     <Stack.Screen name='ModifyCancel'   component={Cancel_Modify} />
     <Stack.Screen name='QrcodeScanner'   component={QrcodeScanner} />
     <Stack.Screen name='RentedItem'   component={Renteditem} />
     <Stack.Screen name='ModifyScreen'   component={ModifyScreen} />
     <Stack.Screen name='Cancel'   component={CancelScreen} />
    </Stack.Navigator>
  </NavigationContainer>

    )
}

export default StackNavigations