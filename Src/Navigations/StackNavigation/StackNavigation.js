import react from 'react'
import { View } from 'react-native'
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
import VerifyID from '../../Screens/Profile/VerifyID';
import RentedItemDetails from '../../Screens/Rented/RentedItemDetail';
import BobizzItemDetails from '../../Screens/Rented/BobizzDetail';
import RequestScreen from '../../Screens/Rented/Request';
import RequestDetail1 from '../../Screens/Rented/RequestDetail/RequestDetail_1';
import RequestDetail_1 from '../../Screens/Rented/RequestDetail/RequestDetail_1';
import RequestDetail_2 from '../../Screens/Rented/RequestDetail/RequestDetail_2';
import OwnerProfiles from '../../Screens/OwnerProfile';
import Add_Object from '../../Screens/Post/Add_Object';
import Confirm_And_Post from '../../Screens/Post/Confirm_Post';
import Graph from '../../Screens/Post/Graph';

import PostDetails from '../../Screens/Post/PostDetail';
import PostModify from '../../Screens/Post/Modify';
import Top_Reviews from '../../Screens/Search/Reviews';








const Stack = createNativeStackNavigator();

const StackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash_Blank'   screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Splash_Blank'          component={Splash_Blank} />
        <Stack.Screen name='Splash'                component={Splash_Screen} />
        <Stack.Screen name='OnBoarding'            component={OnBoarding} />
        <Stack.Screen name='SignUp'                component={SignUp} />
        <Stack.Screen name='Login'                 component={SignInScreen} />
        <Stack.Screen name='PhoneValidation'       component={PhoneValidation} />
        <Stack.Screen name='Otp'                   component={Otp} />
        <Stack.Screen name='Forget'                component={ForgetPassword} />
        <Stack.Screen name='GetCode'               component={GetCode} />
        <Stack.Screen name='Reset'                 component={Reset} />
        <Stack.Screen name='Welcome'               component={Welcome} />
        <Stack.Screen name='BottomTab'             component={Bottom} />
        <Stack.Screen name='Maps'                  component={MapScreen} />
        <Stack.Screen name='SearchItem'            component={SearchItem} />
        <Stack.Screen name='ProductDetails'        component={ProductDetails} />
        <Stack.Screen name='Report'                component={ReportUser} />
        <Stack.Screen name='ReportSubmit'          component={ReportSubmit} />
        <Stack.Screen name='WishlistItem'          component={WishlistItem} />
        <Stack.Screen name='SelectDays'            component={SelectDays} />
        <Stack.Screen name='MultipleDay'           component={MultipleDay} />
        <Stack.Screen name='SingleDay'             component={SingleDay} />
        <Stack.Screen name='ReviewSummary'         component={Review_Summary} />
        <Stack.Screen name='Payment'               component={Payment} />
        <Stack.Screen name='Account'               component={Account} />
        <Stack.Screen name='Balance'               component={Balance} />
        <Stack.Screen name='WhatUserThink'         component={WhatUserThink} />
        <Stack.Screen name='Contact'               component={Contact} />
        <Stack.Screen name='Details'               component={Details} />
        <Stack.Screen name='Withdraw'              component={Withdraw} />
        <Stack.Screen name='SearchData'            component={SearchData} />
        <Stack.Screen name='Chatting'              component={ChatScreen} />
        <Stack.Screen name='ReportUser'            component={ReportUsers} />
        <Stack.Screen name='Notification'          component={Notifications} />
        <Stack.Screen name='ReviewSummary2'        component={Review_Summary2} />
        <Stack.Screen name='Preference'            component={SelectPreference} />
        <Stack.Screen name='ScanQrCode'            component={ScanQrCode} />
        <Stack.Screen name='RentedDetail'          component={RentedItemDetails} />
        <Stack.Screen name='BobizzDetail'          component={BobizzItemDetails} />
        <Stack.Screen name='ModifyCancel'          component={Cancel_Modify} />
        <Stack.Screen name='QrcodeScanner'         component={QrcodeScanner} />
        <Stack.Screen name='RentedItem'            component={Renteditem} />
        <Stack.Screen name='ModifyScreen'          component={ModifyScreen} />
        <Stack.Screen name='Cancel'                component={CancelScreen} />
        <Stack.Screen name='VerifyID'              component={VerifyID} />
        <Stack.Screen name='RequestScreen'         component={RequestScreen} />
        <Stack.Screen name='RequestDetail1'        component={RequestDetail_1} />
        <Stack.Screen name='RequestDetail2'        component={RequestDetail_2} />
        <Stack.Screen name='OwnerProfile'          component={OwnerProfiles} />

        <Stack.Screen name='Add_Object'            component={Add_Object} />
        <Stack.Screen name='Confirm_Post'          component={Confirm_And_Post} />
        <Stack.Screen name='Graph'                 component={Graph} />
        <Stack.Screen name='PostModify'            component={PostModify} />
        <Stack.Screen name='PostDetails'           component={PostDetails} />
        <Stack.Screen name='Top_Reviews'           component={Top_Reviews} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default StackNavigations